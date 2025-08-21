import {Person} from "./bai1"
import {Student} from "./bai2"
import {Car} from "./bai3"
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { User } from "./bai7";
import { Product } from "./bai8";
import {Cat,Dog} from "./bai11"
  
//Bai 1

console.log("---------------Bai 1-----------------")
const person = new Person("Duy", 21);

person.display();

//Bai 2
console.log("---------------Bai 2-----------------")
const student = new Student("Duy",21, 12)
  
student.display()

//Bai 3
console.log("---------------Bai 3-----------------")
const car = new Car("Mercedes","Modern", 2004)
  
car.showCarInfo()

//Bai 4
console.log("---------------Bai 4-----------------")
const rectangle = new Rectangle(4,3)
  
console.log(`Area : ${rectangle.area()}, Perimeter : ${rectangle.perimeter()}`)

//Bai 5
console.log("---------------Bai 5-----------------")
const bankAccount = new BankAccount(10);
  
bankAccount.deposit(5);
bankAccount.withdraw(20);
bankAccount.withdraw(10);

//Bai 6 : Tao class Book

//Bai 7
console.log("---------------Bai 7-----------------")
const user = new User("Duy");
  
console.log(user.getName());
user.setName("Thai Duy");
console.log(user.getName());

//Bai 8
console.log("---------------Bai 8-----------------")
const product = new Product("A",90);
const product1 = new Product("B",110);
const product2 = new Product("C",200);
const product3 = new Product("D",80);
  
const products : Product[] = [product,product1,product2,product3]

const recentProduct = products.filter(p => p.getPrice() > 100)

console.log(recentProduct)

//Bai 9 : Tao interface Animal


//Bai 10 : Tao Class Account

//Bai 11 :
console.log("---------------Bai 11-----------------")
const cat = new Cat("TDuy")
const dog = new Dog("TDui");

cat.meow();
dog.bark();

