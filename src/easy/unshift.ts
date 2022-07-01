// Implement the type version of Array.unshift

// For example

// type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

type Unshift<T extends any[], T2> = [T2, ...T];

type WithFiveAtTheFront = Unshift<[1, 2, 3], 5>; // [5, 1, 2, 3]
