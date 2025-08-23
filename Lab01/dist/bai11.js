"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        this.bark();
    }
    bark() {
        console.log(`Gau Gau Gau`);
    }
    makeSound() {
        console.log(`${this.name} says Woof`);
    }
}
exports.Dog = Dog;
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        this.meow();
    }
    makeSound() {
        console.log(`${this.name} says Meow`);
    }
    meow() {
        console.log(`Meo Meo Meo`);
    }
}
exports.Cat = Cat;
