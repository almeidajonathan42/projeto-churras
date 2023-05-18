import { useState } from "react";

function NewEventDialog(props) {
  const [newPersonName, setNewPersonName] = useState("");
  const [newPersonValueWithDrink, setNewPersonValueWithDrink] = useState("");
  const [newPersonValueWithoutDrink, setNewPersonValueWithoutDrink] =
    useState("");
  const [people, setPeople] = useState([]);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

  const addNewPerson = () => {
    setPeople((oldArray) => [
      ...oldArray,
      {
        name: newPersonName ? newPersonName : "Sem nome",
        valueWithDrink: newPersonValueWithDrink,
        valueWithoutDrink: newPersonValueWithoutDrink,
        checked: false,
      },
    ]);

    setNewPersonName("");
    setNewPersonValueWithDrink("");
    setNewPersonValueWithoutDrink("");
  };

  const removePerson = (e) => {
    const indexToBeRemoved = e.target.getAttribute("data-key");

    let filteredPeople = people.filter((person, index) => {
      return index != indexToBeRemoved;
    });

    setPeople(filteredPeople);
  };

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
    >
      <div
        style={{
          background: "white",
          borderRadius: "5px",
          zIndex: "110",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p
          style={{
            position: "absolute",
            right: "20px",
            fontWeight: "700",
            cursor: "pointer",
          }}
          onClick={props.onClose}
        >
          X
        </p>

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
                value={date.toISOString().split("T")[0]}
                onChange={(e) => setDate(new Date(`${e.target.value}T00:00`))}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={info}
                onChange={(e) => setInfo(e.target.value)}
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
                flexDirection: "column",
                alignItems: people.length === 0 ? "center" : "flex-start",
                justifyContent: people.length === 0 ? "center" : "flex-start",
                height: "200px",
                overflowY: "auto",
              }}
            >
              {people.length === 0 && (
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

              {people.length > 0 && (
                <table
                  style={{
                    color: "rgba(0, 0, 0, 0.9)",
                    fontSize: "15px",
                    width: "100%",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "initial",
                        }}
                      >
                        Nome
                      </th>
                      <th
                        style={{
                          textAlign: "initial",
                        }}
                      >
                        Sem bebida
                      </th>
                      <th
                        style={{
                          textAlign: "initial",
                        }}
                      >
                        Com bebida
                      </th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {people.map((person, index) => {
                      return (
                        <tr key={index}>
                          <td
                            style={{
                              width: "25%",
                              fontWeight: "400",
                            }}
                          >
                            {person.name}
                          </td>
                          <td
                            style={{
                              width: "25%",
                              fontWeight: "400",
                            }}
                          >
                            R${person.valueWithoutDrink}
                          </td>
                          <td
                            style={{
                              width: "25%",
                              fontWeight: "400",
                            }}
                          >
                            R${person.valueWithDrink}
                          </td>
                          <td
                            data-key={index}
                            style={{
                              width: "25%",
                              fontWeight: "700",
                              color: "red",
                              cursor: "pointer",
                            }}
                            onClick={removePerson}
                          >
                            Excluir
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
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
                  value={newPersonName}
                  onChange={(e) => setNewPersonName(e.target.value)}
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
                  value={newPersonValueWithoutDrink}
                  onChange={(e) =>
                    setNewPersonValueWithoutDrink(e.target.value)
                  }
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
                  value={newPersonValueWithDrink}
                  onChange={(e) => setNewPersonValueWithDrink(e.target.value)}
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
                  borderRadius: "4px",
                  marginTop: "10px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
                type="button"
                value="Adicionar participante"
                onClick={addNewPerson}
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
          onClick={() => {
            props.onCreateNewEvent(title, date, info, people);
            setTitle("");
            setDate(new Date());
            setInfo("");
            setPeople([]);
          }}
        />
      </div>
    </div>
  );
}

export default NewEventDialog;
