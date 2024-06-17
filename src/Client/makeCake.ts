import { QueryResult, gql, useMutation, useQuery } from "@apollo/client";

interface MakeCakeInput {
  variables: {
    cakeInput: {
      batter: BatterInputType;
      filling?: FillingInputType;
      frosting?: FrostingInputType;
    };
  };
}

export interface BatterInputType {
  cupsOfFlour: number;
  eggs: number;
  gramsOfButter: number;
  gramsOfBakingPowder: number;
  spoonsOfCocoaPowder: number;
  cupsOfMilk: number;
  cupsOfSugar: number;
}

export interface FrostingInputType {
  gramsOfChocolate: number;
  cansOfCondensedMilk: number;
}

export interface FillingInputType {
  gramsOfChocolate: number;
  cansOfCondensedMilk: number;
  strawberries?: number;
}
const makeCakeQuery = gql`
  mutation MakeCake($cakeInput: CakeInputType!) {
    makeCake(cakeInput: $cakeInput) {
      cookedBatter {
        diameter
        flavor
        height
        weight
      }
      filling {
        calories
        color
        flavor
        mayAffectStability
      }
      frosting {
        calories
        color
        flavor
      }
    }
  }
`;

const useCake = (): ((useLogininput: MakeCakeInput) => Promise<any>) => {
  const [a] = useMutation(makeCakeQuery);
  return a;
};

export default useCake;
