import React, { useEffect, useRef, useState } from "react";
import CakeForm from "./input/form.component";
import Result from "./result/result.component";
import { ApolloProvider } from "@apollo/client";
import client from "../Client/apollo-client";
import { MakeCake } from "../models/models";
import "./recipe.component.css";
import SupBar from "./main/supbar.component";
import Bar from "./main/bar.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "./background.component";

const Recipe: React.FC = () => {
  const [result, setRessult] = useState<MakeCake>({
    data: {
      makeCake: {
        cookedBatter: { diameter: 0, flavor: "", height: 0, weight: 0 },
      },
    },
  });

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="backGround">
      <SupBar />
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
      <body className="body" id="body-content">
        <ApolloProvider client={client}>
          <CakeForm update={setRessult} />
          <Result cake={result} />
        </ApolloProvider>
      </body>
    </div>
  );
};

export default Recipe;
