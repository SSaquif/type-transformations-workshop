import { Equal, Expect } from "../helpers/type-utils";

// Original solution
// type CreateDataShape<TData, TError = undefined> = {
//   data: TData;
//   error: TError;
// };

// More constrained solution
type CreateDataShape<TData, TError extends Error | undefined = undefined> = {
  data: TData;
  error: TError;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      {
        data: string;
        error: undefined;
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
