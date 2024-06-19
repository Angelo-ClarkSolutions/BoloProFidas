import React from "react";
import Logo from "./logo.component";
import MainBar from "./mainBar.component";
import "./bar.component.css";

const Bar: React.FC = () => {
  return (
    <div className="bar">
      <div className="logoBarDiv">
        <Logo />
      </div>
      <div className="barMainBarDiv">
        <MainBar />
      </div>
    </div>
  );
};

export default Bar;
