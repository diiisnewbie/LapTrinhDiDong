export class Product{
    private name:string;
    private price:number;

    public constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

    public getName():string{
        return this.name;
    }

    public setName(newName:string):void{
        this.name = newName
    }

    public getPrice():number{
        return this.price;
    }

    public setPrice(newPrice:number):void{
        this.price = newPrice
    }


}