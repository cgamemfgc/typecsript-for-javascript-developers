export {};

//returnがない場合、型をvoidにする（ある場合はreturnされる値の型を指定する）
function returnNothing(): void {
  console.log("I don't know anything");
}

console.log(returnNothing());
