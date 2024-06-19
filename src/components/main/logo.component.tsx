import React from "react";
import "./logo.component.css";

const Logo: React.FC = () => {
  const logoHeight = 63;
  return (
    <div className="imageDiv">
      <img
        src="white-cake-solutions.png"
        width={logoHeight * 2.3469}
        height={logoHeight}
        alt="Cake Solutions Logo"
        className="logo"
      />
    </div>
  );
};

export default Logo;
