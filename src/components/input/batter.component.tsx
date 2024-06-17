import React, { useEffect, useState } from "react";
import "./input.component.css";
import IngredientInput from "./ingredient.component";
import { BatterComponentProps } from "../../models/models";

const Batter: React.FC<BatterComponentProps> = ({ setValue }) => {
  const [strCupsOfFlour, setWheatFlour] = useState<string>("0");
  const [strEggs, setEgg] = useState<string>("0");
  const [strGramsOfButter, setButter] = useState<string>("0");
  const [strGramsOfBakingPowder, setBakingPowder] = useState<string>("0");
  const [strSpoonsOfCocoaPowder, setCocoaPowder] = useState<string>("0");
  const [strCupsOfMilk, setMilk] = useState<string>("0");
  const [strCupsOfSugar, setSugar] = useState<string>("0");

  useEffect(() => {
    setValue({
      cupsOfFlour: parseInt(strCupsOfFlour),
      eggs: parseInt(strEggs),
      gramsOfButter: parseInt(strGramsOfButter),
      gramsOfBakingPowder: parseInt(strGramsOfBakingPowder),
      spoonsOfCocoaPowder: parseInt(strSpoonsOfCocoaPowder),
      cupsOfMilk: parseInt(strCupsOfMilk),
      cupsOfSugar: parseInt(strCupsOfSugar),
    });
  }, [
    strCupsOfFlour,
    strEggs,
    strGramsOfButter,
    strGramsOfBakingPowder,
    strSpoonsOfCocoaPowder,
    strCupsOfMilk,
    strCupsOfSugar,
    setValue,
  ]);

  return (
    <form>
      <h3>Massa</h3>
      <IngredientInput
        label="Farinha de Trigo (copos)"
        setValueFunction={setWheatFlour}
      />
      <IngredientInput label="Ovos (un)" setValueFunction={setEgg} />
      <IngredientInput label="Manteiga (g)" setValueFunction={setButter} />
      <IngredientInput
        label="Fermento Químico (colheres de sopa)"
        setValueFunction={setBakingPowder}
      />
      <IngredientInput
        label="Cacau em Pó (colheres de sopa)"
        setValueFunction={setCocoaPowder}
      />
      <IngredientInput label="Leite (copos)" setValueFunction={setMilk} />
      <IngredientInput label="Açúcar (copos)" setValueFunction={setSugar} />
    </form>
  );
};

export default Batter;
