import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

// The basic building block here
type Basic = {
  [key in Route["route"]]: string;
};
type Example = Basic;

// solution 1
// this is creating a key by looping through
// each value in the discriminated union
type RoutesObject = {
  [key in Route["route"]]: Extract<Route, { route: key }>["search"];
};

// solution 2
// Iterating over the whole Route
// here the trick is you need to use "as"
// have to re-map Route object to a string
type RoutesObject2 = {
  [R in Route as R["route"]]: R["search"];
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >
];
