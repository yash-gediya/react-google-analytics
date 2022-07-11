import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GoogleAnalytics = () => {
  const location = useLocation();

  const clickHandle = () => {
  };
  
  useEffect(() => {
    ReactGA.initialize("G-97NGVQTB02");
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  return (
    <div>
      <button onClick={clickHandle}>Google initialize</button>
      GoogleAnalytics <br />
      <Link to={"one"}>One</Link>
      <br />
      <Link to={"two"}>Two</Link>
    </div>
  );
};

export default GoogleAnalytics;
