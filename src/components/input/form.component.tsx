import React, { useState } from "react";
import Batter from "./batter.component";
import Filling from "./filling.component";
import Frosting from "./frosting.component";
import {
  BatterInputType,
  FillingInputType,
  FrostingInputType,
} from "../../Client/makeCake";
import { useForm } from "react-hook-form";
import useCake from "../../Client/makeCake";
import { CakeFormProps } from "../../models/models";

const CakeForm: React.FC<CakeFormProps> = ({ update }) => {
  const [batter, setBatterInput] = useState<BatterInputType>({
    gramsOfBakingPowder: 0,
    gramsOfButter: 0,
    spoonsOfCocoaPowder: 0,
    eggs: 0,
    cupsOfMilk: 0,
    cupsOfSugar: 0,
    cupsOfFlour: 0,
  });
  const [frosting, setFrostingInput] = useState<FrostingInputType | undefined>(
    undefined
  );
  const [filling, setFillingInput] = useState<FillingInputType | undefined>(
    undefined
  );

  const makeCake = useCake();

  const { handleSubmit } = useForm();

  const onSubmit = handleSubmit(async () => {
    const result = await makeCake({
      variables: {
        cakeInput: {
          batter: batter,
          frosting: frosting,
          filling,
        },
      },
    });
    update(result);
  });

  return (
    <div>
      <div className="columns">
        <Batter setValue={setBatterInput} />
        <div>
          <Filling setValue={setFillingInput} />
          <Frosting setValue={setFrostingInput} />
        </div>
      </div>
      <div className="buttonDiv">
        <button onClick={onSubmit}>Fazer Bolo</button>
      </div>
    </div>
  );
};

export default CakeForm;
