/*
 * Returns the type of the first element in an array.
 * If no array is passed as a generic then return never.
 * */
type FirstOfArray<T extends any[]> = T extends [] ? never : T[0];

const myArray = [() => 123, "Andy", 2, null];

type MyString = FirstOfArray<typeof myArray>;

const myString: MyString = 2;
