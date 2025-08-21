"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
const bai11_1 = require("./bai11");
//Bai 1
console.log("---------------Bai 1-----------------");
const person = new bai1_1.Person("Duy", 21);
person.display();
//Bai 2
console.log("---------------Bai 2-----------------");
const student = new bai2_1.Student("Duy", 21, 12);
student.display();
//Bai 3
console.log("---------------Bai 3-----------------");
const car = new bai3_1.Car("Mercedes", "Modern", 2004);
car.showCarInfo();
//Bai 4
console.log("---------------Bai 4-----------------");
const rectangle = new bai4_1.Rectangle(4, 3);
console.log(`Area : ${rectangle.area()}, Perimeter : ${rectangle.perimeter()}`);
//Bai 5
console.log("---------------Bai 5-----------------");
const bankAccount = new bai5_1.BankAccount(10);
bankAccount.deposit(5);
bankAccount.withdraw(20);
bankAccount.withdraw(10);
//Bai 6 : Tao class Book
//Bai 7
console.log("---------------Bai 7-----------------");
const user = new bai7_1.User("Duy");
console.log(user.getName());
user.setName("Thai Duy");
console.log(user.getName());
//Bai 8
console.log("---------------Bai 8-----------------");
const product = new bai8_1.Product("A", 90);
const product1 = new bai8_1.Product("B", 110);
const product2 = new bai8_1.Product("C", 200);
const product3 = new bai8_1.Product("D", 80);
const products = [product, product1, product2, product3];
const recentProduct = products.filter(p => p.getPrice() > 100);
console.log(recentProduct);
//Bai 9 : Tao interface Animal
//Bai 10 : Tao Class Account
//Bai 11 :
console.log("---------------Bai 11-----------------");
const cat = new bai11_1.Cat("TDuy");
const dog = new bai11_1.Dog("TDui");
cat.meow();
dog.bark();
