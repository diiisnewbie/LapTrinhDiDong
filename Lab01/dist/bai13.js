"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cricle = exports.Square = void 0;
class Square {
    constructor(slide) {
        this.slide = slide;
    }
    area() {
        return this.slide * 4;
    }
}
exports.Square = Square;
class Cricle {
    constructor(r) {
        this.r = r;
    }
    area() {
        return 2 * 3.14 * this.r;
    }
}
exports.Cricle = Cricle;
