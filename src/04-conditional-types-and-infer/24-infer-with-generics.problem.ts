import { Equal, Expect } from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

// crazy stuff
type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint
  : never;

type tests = [
  Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>,
  Expect<Equal<GetPoint<MyComplexInterface<1, 2, 3, 4>>, 4>>
];
