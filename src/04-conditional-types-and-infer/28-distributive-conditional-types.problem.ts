import { Equal, Expect } from "../helpers/type-utils";

// Tricky one - watch video
type Fruit = "apple" | "banana" | "orange";

/**
 *  Solution 1  no generic
 *
 * */
type AppleOrBanana = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never;

/**
 * Solution 2 passing a generic T to GetAppleOrBanana first
 * this distributes the conditional type over the union
 * ie T represents each of the union types in turn (kind of like a for loop)
 * */
// type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;
// type AppleOrBanana = GetAppleOrBanana<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
