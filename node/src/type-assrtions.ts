export {};

//変数lengthはanyなので、別の型で再代入ができてしまう。
//下記は本来であれば文字列の数を格納したいのでnumberだが、fooというstring型の文字列が代入可能になっている
// let name: any = 'Sakamoto';
// let length = name.length;

// length = 'foo';

// console.log(length);

//型アサーションで右辺からやってくるデータの型を指定する
// as numberの部分
let name: any = 'Sakamoto';
let length = name.length as number;

//または
// let length = (name as string).length;

//もしくはこちらだけど、非推奨
// let length = (<string>name).length;

// length = 'foo';

console.log(length);
