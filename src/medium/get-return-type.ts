// Implement the built-in ReturnType<T> generic without using it.

// For example

// const fn = (v: boolean) => {
//   if (v)
//     return 1
//   else
//     return 2
// }

// type a = MyReturnType<typeof fn> // should be "1 | 2"

type MyReturnType<T> = T extends (...args: any) => infer F ? F : never;

const chickenLeg = (hasBeenEaten: boolean) => {
  return hasBeenEaten ? "Yep!" : "Nope!";
};

type ChickenLegResult = MyReturnType<typeof chickenLeg>; // "Yep!" | "Nope!"
