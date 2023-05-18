import bbqIconCircle from "../assets/bbqIconCircle.svg";

function NewEventBlock(props) {
  return (
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
        bottom: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onClick={props.onClick}
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
  );
}

export default NewEventBlock;
