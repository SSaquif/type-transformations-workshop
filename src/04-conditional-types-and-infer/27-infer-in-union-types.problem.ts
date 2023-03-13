import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

// Solution 1
// type GetParserResult<T> = T extends { parse: () => infer TData }
//   ? TData
//   : T extends { extract: () => infer TData }
//   ? TData
//   : T extends () => infer TData
//   ? TData
//   : never;

// Solution 2 discriminated union
type GetParserResult<T> = T extends
  | { parse: () => infer TData }
  | { extract: () => infer TData }
  | (() => infer TData)
  ? TData
  : never;

// Usage: returns boolean
type Extract = GetParserResult<typeof parser3>;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
