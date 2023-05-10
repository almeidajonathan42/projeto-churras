import bbqPattern from "../assets/bbqPattern.svg";

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
      <img
        src={bbqPattern}
        style={{
          width: "100%",
          maxHeight: "100vh",
          position: "absolute",
          top: "0",
          zIndex: "1",
          WebkitMaskImage: "linear-gradient(180deg, rgba(255,216,54,1) 1%, rgba(0,0,0,0) 100%)"
        }}
        alt="trinca logo"
      />
      {props.children}
    </div>
  );
}

export default Background;
