import bbqPattern from "../assets/bbqPattern.svg";
import logo from "../assets/logo.svg";

function Background(props) {
  return (
    <div
      style={{
        background: "#FFD836",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          zIndex: "20",
          position: "absolute",
          top: "70px",
        }}
      >
        Agenda de Churras
      </h1>

      <img
        src={bbqPattern}
        style={{
          width: "100%",
          maxHeight: "100vh",
          position: "absolute",
          top: "0",
          zIndex: "1",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(255,216,54,1) 1%, rgba(0,0,0,0) 100%)",
        }}
        alt="barbecue pattern"
      />

      {props.children}

      <img
        src={logo}
        style={{
          height: "50px",
          position: "absolute",
          bottom: "28px",
          zIndex: "20",
        }}
        alt="trinca logo"
      />
    </div>
  );
}

export default Background;
