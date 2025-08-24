import {Teacher } from "./bai27";
import { Person } from "./bai1";
import { Student } from "./bai2";


export class School {
    constructor(public students: Student[], public teachers: Teacher[]) {}

    displayInfo(): void {
        console.log("Teachers");
        this.teachers.forEach(t => console.log(`${t.getName()} - ${t.subject}`));

        console.log("Students");
        this.students.forEach(s => console.log(`${s.getName()} - Age: ${s.getAge()}`));
    }
}