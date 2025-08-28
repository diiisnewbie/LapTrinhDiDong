"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.Animal = void 0;
class Animal {
    makeSound() {
        return "Some generic animal sound";
    }
    speak() {
        console.log(this.makeSound());
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    makeSound() {
        return "Woof! Woof!";
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    makeSound() {
        return "Meow! Meow!";
    }
}
exports.Cat = Cat;
