import React, { useState } from "react";
import CakeForm from "./input/form.component";
import Result from "./result/result.component";
import { ApolloProvider } from "@apollo/client";
import client from "../Client/apollo-client";
import { MakeCake } from "../models/models";
import "./recipe.component.css";

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
      <head className="header">
        <h1 className="h1">Bem-vindo à </h1>
        <div className="imageDiv">
          <img
            src="cake-solutions.png"
            width={217}
            height={89}
            alt="Cake Solutions Logo"
          />
        </div>
      </head>
      <body className="body">
        <ApolloProvider client={client}>
          <CakeForm update={setRessult} />
          <Result cake={result} />
        </ApolloProvider>
      </body>
    </div>
  );
};

export default Recipe;
