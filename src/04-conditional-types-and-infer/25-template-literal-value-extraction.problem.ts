import { Equal, Expect } from "../helpers/type-utils";

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King",
  "Prince",
  "John Williams Robert"
];

type GetSurname<T> = T extends `${string} ${string} ${infer surname}`
  ? surname
  : T extends `${string} ${infer surname}`
  ? surname
  : T extends `${infer surname}`
  ? surname
  : never;

type tests = [
  Expect<Equal<GetSurname<Names[0]>, "Pocock">>,
  Expect<Equal<GetSurname<Names[1]>, "Hendrix">>,
  Expect<Equal<GetSurname<Names[2]>, "Clapton">>,
  Expect<Equal<GetSurname<Names[3]>, "Mayer">>,
  Expect<Equal<GetSurname<Names[4]>, "King">>,
  Expect<Equal<GetSurname<Names[5]>, "Prince">>,
  Expect<Equal<GetSurname<Names[6]>, "Robert">>
];
