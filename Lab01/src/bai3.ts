export class Car {
    brand: string;
    model : string;
    year : number;

    public constructor(brand:string, model:string, year:number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public showCarInfo():void{
        console.log(`Brand : ${this.brand}, Model : ${this.model} , Year: ${this.year}`)
    }
}