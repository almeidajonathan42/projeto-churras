import people from "../assets/people.svg";
import money from "../assets/money.svg";
import bbqIconCircle from "../assets/bbqIconCircle.svg";
import { useState } from "react";

function Detail() {
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
        zIndex: "10",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "30%",
          zIndex: "10",
        }}
      ></div>

      <div
        style={{
          background: "#FAFAFA",
          height: "70%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          zIndex: "10",
          padding: "0 24px 111px 24px",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "#FFFFFF",
            boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
            borderRadius: "2px",
            padding: "21px 36px 46px 24px",
            position: "relative",
            bottom: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              font: "Raleway",
              fontWeight: "800",
              fontSize: "28px",
              position: "absolute",
              margin: 0,
              top: "21px",
              left: "24px",
            }}
          >
            01/12
          </p>
          <p
            style={{
              color: "rgba(0, 0, 0, 0.8)",
              font: "Raleway",
              fontWeight: "700",
              fontSize: "36px",
              position: "absolute",
              margin: 0,
              top: "62px",
              left: "24px",
            }}
          >
            Niver do Gui
          </p>
          <div
            style={{
              position: "absolute",
              margin: 0,
              top: "29px",
              right: "36px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
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
                15
              </p>
            </div>

            <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "17px",
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
                  R$150
                </p>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
