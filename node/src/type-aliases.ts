import { type } from 'os';

export {};

//型の別名を作る（別名は始めを大文字にする）
type Mojiretsu = string;

const foo: string = 'Hello!';
const fooMojiretsu: Mojiretsu = 'Hello!';

const example1 = {
  name: 'sakamoto',
  age: 35,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'sakamoto',
  age: 35,
};

type Profile2 = typeof example1;
