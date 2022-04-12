// Returns an object with properties picked from T
type HomeMadePick<T, K extends keyof T> = {
  [key in K]: T[key];
};

type Person = {
  name: string;
  age: number;
};

type NameOnly = HomeMadePick<Person, "name">;

const objWithName: NameOnly = {
  name: "Andy",
};
