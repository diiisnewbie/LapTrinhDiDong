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
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai6_1 = require("./bai6");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
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
//Bai 12 :
console.log("---------------Bai 12-----------------");
const fish = new bai12_1.Fish("Ca Chep");
const bird = new bai12_1.Birds("Chim Cu");
fish.swim();
bird.fly();
//Bai 13 :
console.log("---------------Bai 13-----------------");
const square = new bai13_1.Square(4);
const cricle = new bai13_1.Cricle(3);
console.log(square.area());
console.log(cricle.area());
//Bai 14 :
console.log("---------------Bai 14-----------------");
const manager = new bai14_1.Manager("Duy", "Lead");
const dev = new bai14_1.Developer("NDuy", "ReactNative");
manager.manageTask();
dev.code();
//Bai 15 :
console.log("---------------Bai 15-----------------");
const library = new bai15_1.Library();
library.addBook(new bai6_1.Book("React", "Duy", 2004));
library.getBook();
//Bai 16 :
console.log("---------------Bai 16-----------------");
const number = new bai16_1.Box(123);
console.log(number.getValue());
const number1 = new bai16_1.Box("Duy");
console.log(number1.getValue());
//Bai 17 :
console.log("---------------Bai 17-----------------");
const logger = bai17_1.Logger.getInstance();
logger.log("Loi");
//Bai 18 :
console.log("---------------Bai 18-----------------");
console.log(bai18_1.MathUtil.add(5, 3)); // 8
console.log(bai18_1.MathUtil.subtract(10, 4)); // 6
console.log(bai18_1.MathUtil.multiply(6, 7)); // 42
console.log(bai18_1.MathUtil.divide(20, 5)); // 4
//Bai 19 :
console.log("---------------Bai 19-----------------");
const cat1 = new bai11_1.Cat("LuBU");
const dog1 = new bai11_1.Dog("TV");
cat1.makeSound();
dog1.makeSound();
//Bai 20 :
console.log("---------------Bai 20-----------------");
const car1 = new bai20_1.Car1("Toyota", 100);
const bike = new bai20_1.Bike("ThongNhat", 5);
console.log(car1.getInfo());
console.log(bike.getInfo());
//Bai 21:
console.log("---------------Bai 21-----------------");
const numberRepo = new bai21_1.Repository();
numberRepo.add(10);
numberRepo.add(20);
console.log(numberRepo.getAll());
const stringRepo = new bai21_1.Repository();
stringRepo.add("Hello");
stringRepo.add("World");
console.log(stringRepo.getAll());
//Bai 22:
console.log("---------------Bai 22-----------------");
const numberStack = new bai22_1.Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log(numberStack.peek()); // 30
console.log(numberStack.pop()); // 30
console.log(numberStack.peek()); // 20
console.log(numberStack.isEmpty()); // false
// Stack rỗng
const stringStack = new bai22_1.Stack();
console.log(stringStack.isEmpty()); // true
stringStack.push("Hello");
stringStack.push("World");
console.log(stringStack.pop()); // "World"
console.log(stringStack.peek()); // "Hello"
//Bai 23:
console.log("---------------Bai 23-----------------");
const cash = new bai23_1.CashPayment();
cash.pay(100);
const card = new bai23_1.CardPayment("1234-5678-9876-5432");
card.pay(250);
//Bai 24:
console.log("---------------Bai 24-----------------");
const fan = new bai24_1.Fan();
const airConditioner = new bai24_1.AirConditioner();
fan.turnOn();
airConditioner.turnOn();
//Bai 25:
console.log("---------------Bai 25-----------------");
bai25_1.Shape1.describe();
