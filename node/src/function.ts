export {};

function bmi(hight: number, weight: number): number {
  return weight / (hight ^ 2);
}

console.log(bmi(1.7, 77));
