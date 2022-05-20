import { type } from 'os';

export {};
//intersection型は既存の型を再利用して新しい型を作る
type Picher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Picher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.36,
};

//Picher1とBatter1の型を合体させる
type TowWayPlayer = Picher1 & Batter1;

const OtaniSyohei: TowWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
