/* Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. 
The output should be a new array that includes inputs in ltr order.
*/

// type Result = Concat<[1], [2]> // expected to be [1, 2]

type Concat<T1 extends any[], T2 extends any[]> = [...T1, ...T2];

const mergedArray: Concat<[1, 2], [3, 4]> = [1, 2, 3, 4];

console.log(mergedArray); // [1, 2, 3, 4]

export {};
