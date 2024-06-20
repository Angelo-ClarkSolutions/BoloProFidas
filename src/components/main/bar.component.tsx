import React from "react";
import Logo from "./logo.component";
import "./bar.component.css";
import HoverMenu from "./hovermenu.component";

const Bar: React.FC = () => {
  return (
    <div className="bar">
      <div className="logoBarDiv">
        <Logo />
      </div>
      <div className="barMainBarDiv">
        <HoverMenu />
      </div>
    </div>
  );
};

export default Bar;
