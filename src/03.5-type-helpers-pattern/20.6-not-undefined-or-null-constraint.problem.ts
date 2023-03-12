// Another tricky one
// Compare this with the earlier exercises (20.1)
// They are actually quite different
// Unlike 20.1 we are dealing with the argument and not the return type
// this works cause in TS/JS everything is an object
// can be used to define anything that is not null or undefined
export type Maybe<T extends {}> = T | null | undefined;

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">
];
