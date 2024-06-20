import React from "react";
import ImageSlider from "./background.component";
import Bar from "../main/bar.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./header.component.css";

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <head className="header">
      <ImageSlider />
      <Bar />
      <div className="slogan">
        <div>
          <h1 className="flavor">Flavor</h1>
          <h1 className="driven">Driven</h1>
        </div>
      </div>
      <div className="goToBake">
        <div className="orderNow">
          <div
            onClick={() => scrollToSection("body-content")}
            className="bakery"
          >
            P A D A R I A
          </div>
        </div>
        <div
          className="downArrow"
          onClick={() => scrollToSection("body-content")}
        >
          <div className="arrow">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      </div>
    </head>
  );
};

export default Header;
