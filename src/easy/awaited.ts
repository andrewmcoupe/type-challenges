/*
 * - Constrain the generic to be of type Promise<any>
 * - infer the type wrapped in a Promise
 * - if the inferred type is a Promise, return MyAwaited<inferred Type> and start the checks again
 * - if the inferred type is not a Promise, return the inferred type
 */
type MyAwaited<GenericType extends Promise<any>> = GenericType extends Promise<
  infer F
>
  ? F extends Promise<any>
    ? MyAwaited<F>
    : F
  : never;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type Foo = MyAwaited<X>;
type Bar = MyAwaited<Y>;
type Baz = MyAwaited<Z>;

const a: Foo = "I am a string";
const b: Bar = { field: 1 };
const c: Baz = 1;

export {};
