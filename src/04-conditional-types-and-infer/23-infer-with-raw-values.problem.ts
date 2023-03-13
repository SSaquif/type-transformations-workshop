import { Equal, Expect } from "../helpers/type-utils";

// solution 1
// type GetDataValue<T> = T extends { data: any } ? T["data"] : never;
// solution 2 with infer
type GetDataValue<T> = T extends { data: infer TData } ? TData : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>
];
