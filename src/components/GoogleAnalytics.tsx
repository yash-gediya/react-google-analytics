import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GoogleAnalytics = () => {
  const location = useLocation();

  // ReactGA.initialize("G-97NGVQTB02");
  const handleClickEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "buttonClick",
      category: "Custom Button",
      action: "click",
      lable: "Google Analytics Custom Button",
    });
  };

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
  return (
    <div>
      <button onClick={handleClickEvent}>Google initialize</button>
      GoogleAnalytics <br />
      <Link to={"one"}>One</Link>
      <br />
      <Link to={"two"}>Two</Link>
    </div>
  );
};

export default GoogleAnalytics;
