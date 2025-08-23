export interface Flyable{
    name: string

    fly() : void
}

export interface Swimmable{
    name: string

    swim() : void

}

export class Birds implements Flyable{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    fly(): void {
        console.log("Fllyyyyyyyyyyyy")
    }
}

export class Fish implements Swimmable{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    swim(): void {
        console.log("Swimmmmmmmmm")
    }

}