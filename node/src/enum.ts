export {};

//enumの後は必ず複数形にする
//各要素に連番のインデックスが振られる
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.April);

enum COLORS {
  RED = '#FF0000',
  WHITE = 'FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '000000',
}

let green = COLORS.GREEN;
console.log({ green });

//後から足すこともできる
enum COLORS {
  YELLOW = 'FFFF00',
  GRAY = '808080',
}
