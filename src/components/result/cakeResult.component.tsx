import React from "react";
import Part from "./part.component";
import { CakeResultProps } from "../../models/models";

const CakeResult: React.FC<CakeResultProps> = ({ batterResult }) => {
  if (batterResult.diameter == 0) {
    return null;
  }

  return (
    <div>
      <h3>Bolo</h3>
      <Part label="Diâmetro (cm)" value={batterResult?.diameter} />
      <Part label="Sabor" value={batterResult?.flavor} />
      <Part label="Altura (cm)" value={batterResult?.height} />
      <Part label="Peso (kg)" value={batterResult?.weight} />
    </div>
  );
};

export default CakeResult;
