export interface ResultProps {
  cake: {
    data: {
      makeCake: CakeResultModel;
    };
  };
}
export interface MakeCake {
  data: {
    makeCake: CakeResultModel;
  };
}
export interface CakeResultModel {
  cookedBatter: CookedBatterModel;
  filling?: FillingModel;
  frosting?: FrostingModel;
}

export interface CookedBatterModel {
  diameter: number;
  height: number;
  flavor: string;
  weight: number;
}

export interface FillingModel {
  flavor: string;
  color: string;
  calories: number;
  mayAffectStability: boolean;
}

export interface FrostingModel {
  flavor: string;
  color: string;
  calories: number;
}

export interface CakeResultProps {
  batterResult: CookedBatterModel;
}
export interface FillingResultProps {
  filling?: FillingModel;
}
export interface FrostingResultProps {
  frosting?: FrostingModel;
}

export interface PartProps {
  label: string;
  value: number | string;
}

export interface CakeFormProps {
  update: Function;
}

export interface BatterComponentProps {
  setValue: Function;
}

export interface FillingComponentProps {
  setValue: Function;
}

export interface FrostingComponentProps {
  setValue: Function;
}

export interface IngredientProps {
  label: string;
  setValueFunction: Function;
}
