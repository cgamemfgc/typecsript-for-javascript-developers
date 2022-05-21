export {};
//シグネチャー　引数の方と戻り値の形を関数の前に定義する
function double(value: number): number;
function double(value: string): string;

//overloadでは関数の実態はany型にする（union型ではない）
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
//↑コンパイルエラーになる

//シグネチャーで型をnumberとstringに限定しているので、こう書かなくてもよい

// function double(value: any): any {
//   if (typeof value === 'number') {
//     return value * 2;
//   } else if (typeof value === 'string') {
//     return value + value;
//   } else {
//     throw 'numberでもstringでもないので、引数の型を確認してください';
//   }
// }

//この関数に入る型はnumberとstringしかあり得ないため、他の方が入るとコンパイルエラーになる
