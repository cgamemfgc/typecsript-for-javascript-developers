export {};

//関数の中で例外を起こす（戻ってこない）場合はnever型になる
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me');
