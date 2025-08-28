"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment = exports.CashPayment = void 0;
class CashPayment {
    pay(amount) {
        console.log(`Paid ${amount} using cash.`);
    }
}
exports.CashPayment = CashPayment;
class CardPayment {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`Paid ${amount} using card ${this.cardNumber}.`);
    }
}
exports.CardPayment = CardPayment;
