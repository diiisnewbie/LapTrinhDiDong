export class Person{
    private name : string;
    private age : number;

    public constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }

    public display(): void  {
        console.log(`Name : ${this.name}, Age : ${this.age}`);
    }

    getName() : string{
        return this.name;
    }

    getAge() : number{
        return this.age;
    }

}