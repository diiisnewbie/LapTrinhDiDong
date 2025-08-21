import {Person} from "./bai1"

export class Student extends Person{
    private grade : number;

    public constructor(name:string, age:number, grade:number){
        super(name,age);
        this.grade = grade;
    }

    public display():void{
        super.display();
        console.log(`Grade: ${this.grade}`)
    }

}