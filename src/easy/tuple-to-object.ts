// Takes a tuple and turns it into an object.
type TupleToObject<T extends readonly any[]> = {
  [Key in T[number]]: Key;
};

const tuple = ["Andy", "Mich", "Oliver"] as const;

const objectFromTuple: TupleToObject<typeof tuple> = {
  Andy: "Andy",
  Mich: "Mich",
  Oliver: "Oliver",
};
