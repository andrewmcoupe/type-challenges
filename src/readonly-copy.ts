// Copies an object type and makes the properties readonly
type ReadonlyCopy<T> = {
  readonly [Key in keyof T]: T[Key];
};

type Person = {
  name: string;
  age: number;
};

const readonlyPerson: ReadonlyCopy<Person> = {
  age: 20,
  name: "John",
};
