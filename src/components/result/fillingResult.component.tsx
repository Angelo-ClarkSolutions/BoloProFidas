import React from "react";
import { FillingResultProps } from "../../models/models";
import Part from "./part.component";

const FillingResult: React.FC<FillingResultProps> = ({ filling }) => {
  if (filling?.calories === 0 || !filling) {
    return null;
  }

  return (
    <div>
      <h3 className="subtitle">Recheio</h3>
      <Part label="Calorias" value={filling?.calories} />
      <Part label="Sabor" value={filling?.flavor} />
      <Part label="Cor" value={filling?.color} />
    </div>
  );
};

export default FillingResult;
