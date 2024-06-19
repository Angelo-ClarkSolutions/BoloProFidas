import React, { useEffect, useState } from "react";
import "./input.component.css";
import IngredientInput from "./ingredient.component";
import { FrostingComponentProps } from "../../models/models";

const Frosting: React.FC<FrostingComponentProps> = ({ setValue }) => {
  const [strChocolate, setChocolate] = useState<string>();
  const [strCondensedMilk, setCondensedMilk] = useState<string>();

  useEffect(() => {
    if (!strChocolate || !strCondensedMilk) {
      return setValue(undefined);
    }
    setValue({
      gramsOfChocolate: parseInt(strChocolate),
      cansOfCondensedMilk: parseInt(strCondensedMilk),
    });
  }, [setValue, strChocolate, strCondensedMilk]);

  return (
    <form>
      <h3 className="subtitle">Cobertura</h3>
      <IngredientInput label="Chocolate (g)" setValueFunction={setChocolate} />
      <IngredientInput
        label="Leite Condensado (lata)"
        setValueFunction={setCondensedMilk}
      />
    </form>
  );
};

export default Frosting;
