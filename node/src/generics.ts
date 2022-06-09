export {};

//Generics
//同じ処理で型が違う場合にGenericsを使って統一させる

//似たような二つの関数をまとめる
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg
// }

//<T>はGenericsの宣言　Tは抽象的な型（型引数）
//引数と戻り値の型が一致している
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('hello'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('hello, Generics!').echo());
console.log(new Mirror<boolean>(true).echo());
