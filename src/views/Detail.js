import people from "../assets/people.svg";
import money from "../assets/money.svg";
import DetailLine from "../components/DetailLine";

import { useState } from "react";

function Detail(props) {
  return (
    <div
      style={{
        background: "#FAFAFA",
        height: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        zIndex: "10",
        padding: "0 24px 0px 24px",
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
          bottom: "57px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className="detail-header"
          style={{
            width: "100%",
            height: "105px",
            marginBottom: "23px",
          }}
        >
          <input
            style={{
              color: "#FFFFFF",
              font: "Raleway",
              fontSize: "15px",
              width: "90px",
              height: "40px",
              background: "#000000",
              boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
              borderRadius: "4px",
              marginTop: "10px",
              fontWeight: "400",
              cursor: "pointer",
              position: "absolute",
              right: "0px",
              top: "-65px",
            }}
            type="button"
            value="Voltar"
            onClick={props.onClickBack}
          />
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
            {("0" + props.date.getDate()).slice(-2)}/
            {("0" + (props.date.getMonth() + 1)).slice(-2)}
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
            {props.title}
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
                {props.people.length}
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
                R${props.value}
              </p>
            </div>
          </div>
        </div>

        <div
          className="detail-body"
          style={{
            width: "99%",
            paddingLeft: "11px",
            display: props.people.length === 0 ? "flex" : "",
            flexDirection: props.people.length === 0 ? "column" : "",
            alignItems: props.people.length === 0 ? "center" : "flex-start",
            justifyContent: props.people.length === 0 ? "center" : "flex-start",
          }}
        >
          {props.people.length === 0 ? (
            <p
              style={{
                color: "rgba(0, 0, 0, 0.4)",
                fontSize: "18px",
                fontStyle: "italic",
              }}
            >
              Não há participantes :(
            </p>
          ) : (
            <>
              {props.people.map((person, index) => {
                return (
                  <DetailLine
                    key={index}
                    name={person.name}
                    value={person.valueWithoutDrink}
                    checked={person.checked}
                    toggleChecked={() => props.onTogglePersonChecked(index)}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
