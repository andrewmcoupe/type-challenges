// Implement the array.push in type system

// e.g. type Result = Push<[1, 2], '3'> // [1, 2, '3']

type Push<GenericArray extends any[], GenericItemToPush> = [
  ...GenericArray,
  GenericItemToPush
];

type Foo = Push<[1, 2, 3], 9>; // [1, 2, 3, 9]

export {};
