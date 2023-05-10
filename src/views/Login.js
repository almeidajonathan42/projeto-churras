import logo from "../assets/logo.svg";
import InputField from "../components/InputField";

function Login() {



  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "10"
      }}
    >
      <h1> Agenda de Churras </h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputField />

        <InputField />

        <input
          style={{
            color: "#FFFFFF",
            fontWeight: "700",
            width: "282px",
            height: "50px",
            background: "#000000",
            boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.06)",
            borderRadius: "18px",
            marginTop: "74px"
          }}
          type="submit"
          value="Entrar"
        />
      </form>

      <img
        src={logo}
        style={{ height: "50px", position: "absolute", bottom: "28px" }}
        alt="trinca logo"
      />
    </div>
  );
}

export default Login;
