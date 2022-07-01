type LengthOfTuple<T extends any[]> = T extends [] ? never : T["length"];

type People = ["Andy", "Michelle", "Oliver"];

type ShouldBeLengthThree = LengthOfTuple<People>;

const five: ShouldBeLengthThree = 3;
