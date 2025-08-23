"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = void 0;
class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}
class Manager extends Employee {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
    manageTask() {
        console.log("Taskkkk");
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    constructor(name, tool) {
        super(name);
        this.tool = tool;
    }
    code() {
        console.log(this.tool);
    }
}
exports.Developer = Developer;
