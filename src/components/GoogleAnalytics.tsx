import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

const GoogleAnalytics = () => {
  // const location = useLocation()
  useEffect(() => {
    ReactGA.initialize("G-97NGVQTB02");
    ReactGA.send({ hitType: "pageview" });
  }, []);
  return <div>GoogleAnalytics</div>;
};

export default GoogleAnalytics;
