export interface Shape{
    area(): number
}

export class Square implements Shape{
    slide: number
    constructor(slide: number){
        this.slide = slide
    }

    area(): number {
        return this.slide *4
    }
}

export class Cricle implements Shape{
    r: number
    constructor(r: number){
        this.r = r;
    }
    area(): number {
        return 2*3.14*this.r;
    }
}