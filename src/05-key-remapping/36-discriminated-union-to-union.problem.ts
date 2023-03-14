import { Equal, Expect } from "../helpers/type-utils";

type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

//crazy TS stuff
type TransformedFruit = {
  [K in Fruit as K["name"]]: `${K["name"]}:${K["color"]}`;
}[Fruit["name"]];

// type RoutesObject = {
//   [R in Route as R["route"]]: R["search"];
// };

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >
];
