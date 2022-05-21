export {};

//オプショナル引数
let bmi: (hihgt: number, weight: number, printable?: boolean) => number = (
  hihgt: number,
  weight: number,
  //?をつけるとオプショナル引数になる
  printable?: boolean
): number => {
  const bmi: number = weight / (hihgt ^ 2);
  if (printable === true) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.7, 77, true);

//bmi(身長, 体重, console.logで出力するかどうか)

//bmi(1.7, 77, true);
//bmi(1.7, 77, false);
//bmi(1.7, 77);
