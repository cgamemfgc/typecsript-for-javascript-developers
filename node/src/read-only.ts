export {};

class visaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new visaCard('sakamoto');

console.log(myVisaCard.owner);

// myVisaCard.owner = 'tanaka'

//readonlyの場合、pubricを書かなくても良い（読めるということはアクセスできるということ）
//けど、可読性を上げるために書いておいた方が良い（かも）
