// type T1 = Parameters<(s: string) => void>;

// type T1 = [s: string]
type CustomParameters<GenericFunction> = GenericFunction extends (
  ...params: infer Params
) => unknown
  ? [...Params]
  : never;

const myFunc = (name: string, age: number) => {};

type MyFuncParams = CustomParameters<typeof myFunc>;

const f: MyFuncParams = ["my string", 2];
