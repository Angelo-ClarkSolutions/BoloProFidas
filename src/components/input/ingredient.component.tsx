import React from "react";
import { IngredientProps } from "../../models/models";

const IngredientInput: React.FC<IngredientProps> = ({
  label,
  setValueFunction,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueFunction(event.target.value);
  };

  return (
    <div className="ingredient">
      <label>{label}</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default IngredientInput;
