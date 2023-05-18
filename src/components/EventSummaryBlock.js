
import people from "../assets/people.svg";
import money from "../assets/money.svg";

function EventSummaryBlock(props) {
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
        bottom: "70px",
        cursor: "pointer"
      }}
      onClick={props.onClick}
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
        {('0' + props.date.getDate()).slice(-2)}/{('0' + (props.date.getMonth()+1)).slice(-2)}
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
        {props.title}
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
          {props.numberOfPeople}
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
          R${props.value}
        </p>
      </div>
    </div>
  );
}

export default EventSummaryBlock;
