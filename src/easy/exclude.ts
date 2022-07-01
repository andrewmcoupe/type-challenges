type MyExclude<UnionType, K> = UnionType extends K ? never : UnionType;

type Foo = "foo" | "bar" | "baz";

const foo: MyExclude<Foo, "baz"> = "foo";
