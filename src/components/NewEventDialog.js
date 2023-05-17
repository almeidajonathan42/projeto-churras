import bbqIconCircle from "../assets/bbqIconCircle.svg";
import { useState } from "react";

function NewEventDialog(props) {
  const [people, setPeople] = useState([
    {
      name: "Alice",
      valueWithDrink: 20,
      valueWithoutDrink: 30,
      checked: false,
    },
    {
      name: "Beto",
      valueWithDrink: 999,
      valueWithoutDrink: 1000,
      checked: false,
    },
    {
      name: "Beto",
      valueWithDrink: 999,
      valueWithoutDrink: 1000,
      checked: false,
    },
    {
      name: "Diego",
      valueWithDrink: 30,
      valueWithoutDrink: 40,
      checked: true,
    },
  ]);

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        background: "rgba(0, 0, 0, 0.3)",
        zIndex: "100",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={props.onClickOutside}
    >
      <div
        style={{
          background: "white",
          borderRadius: "5px",
          zIndex: "110",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => {
          console.log("Nothing should happen");
          e.stopPropagation();
        }}
      >
        <p
          style={{
            margin: "0 0 30px 0",
            color: "rgba(0, 0, 0, 0.8)",
            fontWeight: "700",
            fontSize: "27px",
          }}
        >
          Novo Churras
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroun: "red",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <label
                style={{
                  color: "rgba(0, 0, 0, 0.8)",
                  fontWeight: "700",
                  fontSize: "21px",
                  marginRight: "40px",
                }}
              >
                Data
              </label>
              <input
                style={{
                  width: "300px",
                  height: "50px",
                  background: "#FFFFFF",
                  boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
                  borderRadius: "2px",
                  border: "0",
                  boxSizing: "border-box",
                  padding: "15px 0 13px 20px",
                  font: "Raleway",
                  fontSize: "18px",
                }}
                type="date"
                placeholder={"Aniversário de ..."}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <label
                style={{
                  color: "rgba(0, 0, 0, 0.8)",
                  fontWeight: "700",
                  fontSize: "21px",
                  marginRight: "40px",
                }}
              >
                Descrição
              </label>
              <input
                style={{
                  width: "300px",
                  height: "50px",
                  background: "#FFFFFF",
                  boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
                  borderRadius: "2px",
                  border: "0",
                  boxSizing: "border-box",
                  padding: "15px 0 13px 20px",
                  font: "Raleway",
                  fontSize: "18px",
                }}
                type="text"
                placeholder={"Aniversário de ..."}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <label
                style={{
                  color: "rgba(0, 0, 0, 0.8)",
                  fontWeight: "700",
                  fontSize: "21px",
                  marginRight: "40px",
                }}
              >
                Observações
              </label>
              <input
                style={{
                  width: "300px",
                  height: "50px",
                  background: "#FFFFFF",
                  boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
                  borderRadius: "2px",
                  border: "0",
                  boxSizing: "border-box",
                  padding: "15px 0 13px 20px",
                  font: "Raleway",
                  fontSize: "18px",
                }}
                type="text"
                placeholder={"Lembrar de ..."}
              />
            </div>
          </div>

          <div
            style={{
              color: "rgba(0, 0, 0, 0.8)",
              fontWeight: "700",
              fontSize: "21px",
              paddingLeft: "20px",
              marginLeft: "20px",
              borderLeft: "2px solid rgba(0, 0, 0, 0.8)",
            }}
          >
            <p
              style={{
                color: "rgba(0, 0, 0, 0.8)",
                fontWeight: "700",
                fontSize: "27px",
                margin: "0 0 10px 0",
              }}
            >
              Participantes
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: people.lenght == 0 ? "center" : "flex-start",
                height: "200px",
                overflow: "scroll",
              }}
            >
              {people.length == 0 && (
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.4)",
                    fontSize: "15px",
                    fontStyle: "italic",
                  }}
                >
                  Ainda não há participantes :(
                </p>
              )}

              {people.map((person) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <p> {person.name} </p>
                    <p> {person.valueWithDrink} </p>
                    <p> {person.valueWithoutDrink} </p>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "10px",
                }}
              >
                <label
                  style={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontSize: "15px",
                    marginBottom: "5px",
                  }}
                >
                  Nome
                </label>
                <input
                  style={{
                    width: "150px",
                    height: "30px",
                    background: "#FFFFFF",
                    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
                    borderRadius: "2px",
                    border: "0",
                    boxSizing: "border-box",
                    padding: "10px 0 8px 15px",
                    font: "Raleway",
                    fontSize: "15px",
                  }}
                  type="text"
                  placeholder={"Márcia"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "10px",
                }}
              >
                <label
                  style={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontSize: "15px",
                    marginBottom: "5px",
                  }}
                >
                  Valor sem bebida
                </label>
                <input
                  style={{
                    width: "130px",
                    height: "30px",
                    background: "#FFFFFF",
                    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
                    borderRadius: "2px",
                    border: "0",
                    boxSizing: "border-box",
                    padding: "10px 0 8px 15px",
                    font: "Raleway",
                    fontSize: "15px",
                  }}
                  type="number"
                  placeholder={"20"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label
                  style={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontSize: "15px",
                    marginBottom: "5px",
                  }}
                >
                  Valor com bebida
                </label>
                <input
                  style={{
                    width: "130px",
                    height: "30px",
                    background: "#FFFFFF",
                    boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
                    borderRadius: "2px",
                    border: "0",
                    boxSizing: "border-box",
                    padding: "10px 0 8px 15px",
                    font: "Raleway",
                    fontSize: "15px",
                  }}
                  type="number"
                  placeholder={"30"}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <input
                style={{
                  color: "#FFFFFF",
                  font: "Raleway",
                  fontSize: "15px",
                  width: "190px",
                  height: "40px",
                  background: "#000000",
                  boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
                  borderRadius: "18px",
                  marginTop: "10px",
                  fontWeight: "400"
                }}
                type="submit"
                value="Adicionar participante"
              />
            </div>
          </div>
        </div>

        <input
          style={{
            color: "black",
            font: "Raleway",
            fontSize: "15px",
            fontWeight: "700",
            width: "190px",
            height: "40px",
            background: "rgba(255, 216, 54, 1)",
            boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
            borderRadius: "18px",
            marginTop: "10px",
          }}
          type="submit"
          value="Criar churras"
        />
      </div>
    </div>
  );
}

export default NewEventDialog;
