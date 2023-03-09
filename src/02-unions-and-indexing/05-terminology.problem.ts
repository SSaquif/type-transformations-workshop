/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

// discriminated union
// There is a common property(key) that is used to discriminate between the types
// see solution for more in-depth explanation
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

// Union
type B = "a" | "b" | "c";

// ENUM
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
