// also pretty crazy, watch video for explanation
// both solutions are identical
// type NonEmptyArray<T> = [T, ...Array<T>];
// This apparently has a lot of use cases in application code
// Used by Zod a lot
type NonEmptyArray<T> = [T, ...T[]];

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
