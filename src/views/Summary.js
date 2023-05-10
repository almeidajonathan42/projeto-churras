import logo from "../assets/logo.svg";
import people from "../assets/people.svg";
import money from "../assets/money.svg";
import bbqIconCircle from "../assets/bbqIconCircle.svg";
import { useState } from "react";

function Summary() {
  const [eventList, setEventList] = useState([
    {
      title: "Niver do Gui",
      date: "01/12",
      info: "Uma festa para o Guilherme",
      people: [
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
          name: "Diego",
          valueWithDrink: 30,
          valueWithoutDrink: 40,
          checked: true,
        },
      ],
    },
    {
      title: "Niver da Alana",
      date: "01/12",
      info: "Uma festa para a Alana",
      people: [
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
          name: "Diego",
          valueWithDrink: 30,
          valueWithoutDrink: 40,
          checked: true,
        },
      ],
    },
  ]);

  const getSumOfValuesWithoutDrink = function (peopleArray) {
    return "100";
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "10",
      }}
    >
      <h1
        style={{
          zIndex: "20",
          marginBottom: "48px",
        }}
      >
        Agenda de Churras
      </h1>

      {/* <div
        style={{
          height: "70vh",
          width: "100vw",
          zIndex: "10",
          background: "#FAFAFA",
          position: "absolute",
          bottom: "0",
          zIndex: "15",
        }}
      ></div> */}

      <div
        style={{
          background: "red",
          width: "calc(100% - 48px)",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10",
        }}
      >
        {eventList.map((event) => {
          return (
            <div
              style={{
                width: "282px",
                height: "192px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
                borderRadius: "2px",
                padding: "21px 24px 32px 24px",
                margin: "12px",
                position: "relative",
              }}
            >
              <p
                style={{
                  font: "Raleway",
                  fontWeight: "800",
                  fontSize: "28px",
                  color: "#000000",
                  margin: 0,
                }}
              >
                {event.date}
              </p>
              <p
                style={{
                  font: "Raleway",
                  fontWeight: "700",
                  fontSize: "21px",
                  color: "rgba(0, 0, 0, 0.8)",
                  margin: 0,
                }}
              >
                {event.title}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "32px",
                  left: "24px",
                }}
              >
                <img
                  src={people}
                  style={{ height: "15.3px", marginRight: "12px" }}
                  alt="people logo"
                />
                <p
                  style={{
                    margin: 0,
                    font: "Raleway",
                    fontWeight: "500",
                    fontSize: "21px",
                  }}
                >
                  {event.people.length}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "32px",
                  right: "24px",
                }}
              >
                <img
                  src={money}
                  style={{ height: "20px", marginRight: "7px" }}
                  alt="money logo"
                />
                <p
                  style={{
                    margin: 0,
                    font: "Raleway",
                    fontWeight: "500",
                    fontSize: "21px",
                  }}
                >
                  R${getSumOfValuesWithoutDrink(event.people)}
                </p>
              </div>
            </div>
          );
        })}

        <div
          style={{
            width: "282px",
            height: "192px",
            background: "#F1F1F1",
            boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
            borderRadius: "2px",
            padding: "21px 24px 32px 24px",
            margin: "12px 0 12px 12px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={bbqIconCircle}
            style={{ height: "90px", marginBottom: "8px" }}
            alt="barbecue icon"
          />

          <p
            style={{
              font: "Raleway",
              fontWeight: "700",
              fontSize: "21px",
              color: "#000000",
              margin: 0,
            }}
          >
            Adicionar Churras
          </p>
        </div>
      </div>

      <img
        src={logo}
        style={{ height: "50px", position: "absolute", bottom: "28px" }}
        alt="trinca logo"
      />
    </div>
  );
}

export default Summary;
