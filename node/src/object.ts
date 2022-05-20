export {};

let profile1: object = {
  name: 'sakamoto',
};

profile1 = {
  birthYear: 1987,
};

//オブジェクトのプロパティの型を指定する
let profile2: { name: string } = {
  name: 'sakamoto',
};

console.log(profile2.name);

profile2 = {
  name: 'takeshi',
};

console.log(profile2.name);
