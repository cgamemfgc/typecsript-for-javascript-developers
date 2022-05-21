export {};

//let bim以降の「 (hight: number, weight: number) => number」は型指定
let bmi: (hight: number, weight: number) => number = function (
  hight: number,
  weight: number
): number {
  return weight / (hight ^ 2);
};

console.log(bmi(1.7, 77));
