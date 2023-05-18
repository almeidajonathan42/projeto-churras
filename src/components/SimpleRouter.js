import { useState } from "react";
import Login from "../views/Login";
import Summary from "../views/Summary";

function SimpleRouter(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn === true ? (
        <Summary />
      ) : (
        <Login
          onLogin={() => {
            setIsLoggedIn(true);
          }}
        />
      )}
    </>
  );
}

export default SimpleRouter;
