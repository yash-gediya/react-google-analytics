import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleAnalytics from "./components/GoogleAnalytics";
import One from "./components/One";
import Two from "./components/Two";

const RoutingNavigation = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GoogleAnalytics />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutingNavigation;
