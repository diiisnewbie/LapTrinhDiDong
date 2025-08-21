export class Rectangle{
    width : number;
    height : number;

    public constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    public area():number{
        return (this.width + this.height) * 2;
    }

    public perimeter() : number{
        return (this.width * this.height);
    }
}