import "./InputField.css";

function InputField() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "36px"
      }}
    >
      <label
        style={{
          color: "rgba(0, 0, 0, 0.8)",
          fontWeight: "700",
          fontSize: "21px",
          lineHeight: "25px",
          marginBottom: "16px",
        }}
      >
        Login
      </label>
      <input
        style={{
          width: "282px",
          height: "50px",
          background: "#FFFFFF",
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
          borderRadius: "2px",
          border: "0",
          boxSizing: "border-box",
          padding: "15px 0 13px 20px",
          font: "Raleway",
          fontSize: "18px"
        }}
        type="text"
        name="login"
        placeholder="e-mail"
      />
    </div>
  );
}

export default InputField;
