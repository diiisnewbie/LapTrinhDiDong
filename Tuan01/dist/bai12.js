"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Birds = void 0;
class Birds {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log("Fllyyyyyyyyyyyy");
    }
}
exports.Birds = Birds;
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log("Swimmmmmmmmm");
    }
}
exports.Fish = Fish;
