"use strict";
class MotherAccount {
    constructor() {
        this.balanceInit = 0;
    }
    versamento(oneDeposit) {
        this.balance = oneDeposit + this.balanceInit;
    }
    prelievo(oneWithDraw) {
        this.balance = oneWithDraw - this.balanceInit;
    }
    saldo() {
        console.log(this.balance);
    }
}
let Gina = new MotherAccount();
Gina.versamento(20);
Gina.prelievo(15);
Gina.saldo();
class SonAccount extends MotherAccount {
}
