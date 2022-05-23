export {};

//同じ名前空間に同一のクラスは存在できない
//namespaseを使って名前空間を分ける

namespace Japanese {
  export namespace Tokyo {
    //exportすることで名前空間の外からアクセスできるようになる
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('さかもと');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('さかやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
