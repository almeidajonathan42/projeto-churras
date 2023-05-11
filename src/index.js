import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./views/Login";
import Summary from "./views/Summary";
import Detail from "./views/Detail";
import Background from "./components/Background";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background>
      <Detail />
    </Background>
  </React.StrictMode>
);
