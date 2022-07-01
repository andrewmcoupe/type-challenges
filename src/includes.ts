// type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

type Includes<T1 extends any[], T2> = T2 extends keyof T1 ? true : false;

const foo: Includes<[1, 2, 3, 4], 2> = true;
