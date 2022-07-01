// Implement the built-in Omit<T, K> generic without using it.

// Constructs a type by picking all properties from T and then removing K

type Person = {
  name: string;
  age: number;
  location: string;
};

type MyOmit<T extends {}, K extends keyof T> = {
  [Key in Exclude<keyof T, K>]: T[K];
};

type Omitted = MyOmit<Person, "location">; // { name: string; age: number }

export {};
