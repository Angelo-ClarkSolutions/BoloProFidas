import React from "react";
import { FrostingResultProps } from "../../models/models";
import Part from "./part.component";

const FrostingResult: React.FC<FrostingResultProps> = ({ frosting }) => {
  if (!frosting || frosting.calories == 0) {
    return null;
  }

  return (
    <div>
      <h3>Cobertura</h3>
      <Part label="Calorias" value={frosting?.calories} />
      <Part label="Sabor" value={frosting?.flavor} />
      <Part label="Cor" value={frosting?.color} />
    </div>
  );
};

export default FrostingResult;
