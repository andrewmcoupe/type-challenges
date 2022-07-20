type MyDeepReadOnly<TObject> = {
  readonly [Key in keyof TObject]: TObject[Key] extends never
    ? TObject[Key]
    : MyDeepReadOnly<TObject[Key]>;
};
