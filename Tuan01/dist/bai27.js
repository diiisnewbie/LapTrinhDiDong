"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const bai1_1 = require("./bai1");
class Teacher extends bai1_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
        this.subject = subject;
    }
    getName() {
        return super.getName();
    }
    getAge() {
        return super.getAge();
    }
    introduce() {
        console.log(`Toi ten la ${super.getName()}, toi dang hoc ${this.subject}`);
    }
}
exports.Teacher = Teacher;
