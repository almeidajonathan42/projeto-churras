import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Background from "./components/Background";
import SimpleRouter from "./components/SimpleRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Background>
      <SimpleRouter />
    </Background>
  </React.StrictMode>
);
