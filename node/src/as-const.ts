export {};

//constアサーション
let name = 'takeshi';

name = 'sakamoto';

//as constで書き換えを禁止する
//この変数は定数であるということになる
let nickname = 'takeshi' as const;

let profile = {
  name: 'takeshi',
  height: 170,
} as const;

// profile.name = 'sakamoto';
// profile.height = 190;
