import React from "react";
import "./footerBottom.component.css";
import Logo from "../main/logo.component";
import SocialMedia from "./socialMedia.component";

const FooterBottom: React.FC = () => {
  return (
    <div className="container">
      <Logo />
      <SocialMedia />
    </div>
  );
};

export default FooterBottom;
