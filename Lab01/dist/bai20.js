"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.Car1 = void 0;
class Car1 {
    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }
    getInfo() {
        return `Car: ${this.brand}, Speed: ${this.speed} km/h`;
    }
}
exports.Car1 = Car1;
class Bike {
    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }
    getInfo() {
        return `Bike: ${this.brand}, Speed: ${this.speed} km/h`;
    }
}
exports.Bike = Bike;
