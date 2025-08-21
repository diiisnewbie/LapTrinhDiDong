import { Animal } from "./bai9";

export class Dog implements Animal{
    name: string;

    public constructor(name:string){
        this.name = name;
    }

    sound(): void {
        this.bark()
    }

    bark(): void{
        console.log(`Gau Gau Gau`)
    }

}

export class Cat implements Animal{
    name: string;

    public constructor(name:string){
        this.name = name;
    }

    sound(): void {
        this.meow()
    }

    meow(): void{
        console.log(`Meo Meo Meo`)
    }
}