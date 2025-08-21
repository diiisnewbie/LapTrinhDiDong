export class User{
    private name: string;

    public constructor(name:string){
        this.name= name;
    }

    public getName():string{
        return this.name;
    }

    public setName(newName:string):void{
        this.name = newName; 
    }
}