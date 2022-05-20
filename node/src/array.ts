export {};

let numbers: number[] = [1, 2, 3];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

//二次元配列
let nijigenhairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

//"|"はorの意味
//共用型
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
