"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(money) {
        this.balance += money;
        console.log(`So tien hien tai co : ${this.balance}`);
    }
    withdraw(money) {
        if (this.balance > money) {
            this.balance -= money;
            console.log(`So tien hien tai co : ${this.balance}`);
        }
        else {
            console.log(`So Tien khong du`);
        }
    }
}
exports.BankAccount = BankAccount;
