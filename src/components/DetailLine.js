import "./DetailLine.css";

function DetailLine(props) {
  return (
    <div
      className="detail-line"
      style={{
        borderBottom: "1px solid rgba(229, 194, 49, 1)",
        paddingBottom: "11px",
        paddingLeft: "10px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        cursor: "pointer",
      }}
      onClick={props.toggleChecked}
    >
      <input
        style={{ cursor: "pointer" }}
        type="checkbox"
        className="person-checkbox-input"
        checked={props.checked}
      />
      <label
        style={{
          fontWeight: "700",
          fontSize: "21px",
          color: "rgba(0, 0, 0, 0.8)",
          marginLeft: "19px",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        {props.name}
      </label>

      <p
        style={{
          margin: 0,
          position: "absolute",
          right: "0",
          top: "0",
          font: "Raleway",
          fontWeight: "700",
          fontSize: "21px",
          color: "rgba(0, 0, 0, 0.8)",
          textDecoration: props.checked ? "line-through" : "",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        R${props.value},00
      </p>
    </div>
  );
}

export default DetailLine;
