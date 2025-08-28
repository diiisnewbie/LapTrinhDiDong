"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(products) {
        this.products = [];
        this.products = products;
    }
    calculateTotalPrice() {
        return this.products.reduce((sum, p) => sum + p.getPrice(), 0);
    }
}
exports.Order = Order;
