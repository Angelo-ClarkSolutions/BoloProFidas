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
import ImageSlider from "./header/background.component";
import Header from "./header/header.component";

const Recipe: React.FC = () => {
  const [result, setRessult] = useState<MakeCake>({
    data: {
      makeCake: {
        cookedBatter: { diameter: 0, flavor: "", height: 0, weight: 0 },
      },
    },
  });

  return (
    <div className="backGround">
      <SupBar />
      <Header />
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
