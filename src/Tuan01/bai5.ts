export class BankAccount{
    private balance : number;

    public constructor(balance: number){
        this.balance = balance;
    }

    public deposit(money:number){
        this.balance += money;
        console.log(`So tien hien tai co : ${this.balance}`)
    }

    public withdraw(money:number){
        if(this.balance > money){
            this.balance -= money;
            console.log(`So tien hien tai co : ${this.balance}`)
        }else{
            console.log(`So Tien khong du`)
        }
    }


}