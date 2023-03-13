import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

// good explanation in video https://www.totaltypescript.com/workshops/type-transformations/conditional-types-and-infer/extract-the-result-of-an-async-function/solution
// we a re saying T extends a function that returns a promise
// and that promise has a property called props
// and we are going to infer the type of that props and return that type
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer PropType;
}>
  ? PropType
  : never;

// how would possibly use it
type props = InferPropsFromServerSideFunction<typeof getServerSideProps>;

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >
];
