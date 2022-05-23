export {};

//constructorの引数にでアクセス修飾詩を書くと自動で初期化処理される
class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('sakamoto', 35);

console.log(me);
