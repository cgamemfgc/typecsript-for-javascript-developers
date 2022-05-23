export {};

class Mahotsukai {}
class Soryo {}

//classは単一継承しかできない（複数のクラスから継承できない）
//class Taro extends Mahotsukai,Soryo {}　と書くとコンパイルエラー
class Taro extends Mahotsukai {}

//インターフェースであれば複数から継承できる
interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();

jiro.ionazun();
jiro.kougeki();
