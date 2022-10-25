class MotherAccount {
  balanceInit: number = 0;
  balance?: number;

  versamento(oneDeposit: number) {
    this.balance = oneDeposit + this.balanceInit;
  }

  prelievo(oneWithDraw: number) {
    this.balance = oneWithDraw - this.balanceInit;
  }

  saldo() {
    console.log(this.balance);
  }
}
let Gina = new MotherAccount();
Gina.versamento(20);

Gina.prelievo(10);
Gina.saldo();

class SonAccount extends MotherAccount {}
