"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getPrice() {
        return this.price;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
}
exports.Product = Product;
