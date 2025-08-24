import { Person } from "./bai1";

export class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
        this.subject = subject;
    }

    getName(): string {
        return super.getName();
    }

    getAge():number{
        return super.getAge();
    }

    introduce(): void {
        console.log(`Toi ten la ${super.getName()}, toi dang hoc ${this.subject}`);
    }
}