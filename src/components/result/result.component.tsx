import React from "react";
import CakeResult from "./cakeResult.component";
import { ResultProps } from "../../models/models";
import "./result.component.css";
import FillingResult from "./fillingResult.component";
import FrostingResult from "./frostingResult.component";

const Result: React.FC<ResultProps> = ({ cake }) => {
  if (cake?.data?.makeCake?.cookedBatter.diameter === 0) {
    return null;
  }
  return (
    <div>
      <h2>Resultado</h2>
      <div className="column">
        <CakeResult batterResult={cake?.data.makeCake?.cookedBatter} />
        <FillingResult filling={cake?.data.makeCake?.filling} />
        <FrostingResult frosting={cake?.data?.makeCake?.frosting} />
      </div>
    </div>
  );
};

export default Result;
