import { Equal, Expect } from "../helpers/type-utils";

// This will work without the constraints on the type helpers (generic types T and E)
type CreateDataShape<T extends string | number | boolean, E extends Error> = {
  data: T;
  error: E;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string, TypeError>,
      {
        data: string;
        error: TypeError;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<number, Error>,
      {
        data: number;
        error: Error;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >
];
