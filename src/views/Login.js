import logo from "../assets/logo.svg";
import InputField from "../components/InputField";

function Login(props) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "10",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputField label="Login" placeholder="e-mail" />

        <InputField label="Senha" placeholder="senha" />

        <input
          style={{
            color: "#FFFFFF",
            font: "Raleway",
            fontSize: "18px",
            fontWeight: "700",
            width: "282px",
            height: "50px",
            background: "#000000",
            boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
            borderRadius: "18px",
            marginTop: "74px",
          }}
          type="button"
          value="Entrar"
          onClick={props.onLogin}
        />
      </form>
    </div>
  );
}

export default Login;
