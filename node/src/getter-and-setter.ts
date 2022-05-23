import { Certificate } from 'crypto';

export {};

// ・owner
//    所有者
//    初期化時に設定できる
//    途中で変更できない
//    参照できる

// ・secretNumber
//    個人番号
//    初期化時に設定できる
//    途中で変更可能
//    参照できない

class MyNumberCard {
  //クラスの中で名前が被ってしまうため、メンバー変数に_をつける
  //this.〇〇の部分はすべて変更する
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  //参照専用メソッド（getter）
  get owner() {
    return this._owner;
  }

  //値設定専用メソッド
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  //デバッグ用メソッド
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('sakamoto', 12345);
// card.owner = 'さかもと'
console.log(card.owner);
// card._secretNumber;

console.log(card.debugPrint());
card.secretNumber = 567890;
console.log(card.debugPrint());

console.log(card.secretNumber);
