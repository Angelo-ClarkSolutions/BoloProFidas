import React, { useEffect, useState } from "react";
import "./input.component.css";
import IngredientInput from "./ingredient.component";
import { FillingComponentProps } from "../../models/models";

const Filling: React.FC<FillingComponentProps> = ({ setValue }) => {
  const [strChocolate, setChocolate] = useState<string>();
  const [strCondensedMilk, setCondensedMilk] = useState<string>();
  const [strStrawberry, setStrawberry] = useState<string>();

  useEffect(() => {
    if (!strChocolate || !strCondensedMilk || !strStrawberry) {
      return setValue(undefined);
    }

    setValue({
      gramsOfChocolate: parseInt(strChocolate),
      cansOfCondensedMilk: parseInt(strCondensedMilk),
      strawberries: parseInt(strStrawberry),
    });
  }, [setValue, strChocolate, strCondensedMilk, strStrawberry]);

  return (
    <form>
      <h3 className="subtitle">Recheio</h3>
      <IngredientInput label="Chocolate (g)" setValueFunction={setChocolate} />
      <IngredientInput
        label="Leite Condensado (lata)"
        setValueFunction={setCondensedMilk}
      />
      <IngredientInput label="Morango (un)" setValueFunction={setStrawberry} />
    </form>
  );
};

export default Filling;
