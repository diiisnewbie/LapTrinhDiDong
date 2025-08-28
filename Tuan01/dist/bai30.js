"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor(students, teachers) {
        this.students = students;
        this.teachers = teachers;
    }
    displayInfo() {
        console.log("Teachers");
        this.teachers.forEach(t => console.log(`${t.getName()} - ${t.subject}`));
        console.log("Students");
        this.students.forEach(s => console.log(`${s.getName()} - Age: ${s.getAge()}`));
    }
}
exports.School = School;
