export {};

class Me {
  //静的メンバー
  static isProgrammer: boolean = true;
  static firstName: string = 'takeshi';
  static lastName: string = 'sakamoto';

  static work() {
    return `Hey, guy's! This is ${this.firstName}. Are you intarested in TypeScript? Let's dive into TypeScript!!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

//静的メンバーへのアクセスはクラス名で行う
//静的メンバーの場合、newでインスタンス化しなくてもOK
console.log(Me.isProgrammer);

console.log(Me.work());
