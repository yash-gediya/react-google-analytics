import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-97NGVQTB02");
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, []);

  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
