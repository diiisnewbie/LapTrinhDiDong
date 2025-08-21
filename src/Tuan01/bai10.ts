export class Account{
    public name:string;
    private balance: number;
    readonly accountNumber : string;

    public constructor(name:string, balance:number, accountNumber:string){
        this.name = name;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

}