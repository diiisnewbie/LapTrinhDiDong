"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {Person} from "./bai1"
// import {Student} from "./bai2"
// import { Teacher } from "./bai27";
// import {Car} from "./bai3"
// import { Rectangle } from "./bai4";
// import { BankAccount } from "./bai5";
// import { User } from "./bai7";
// import { Product } from "./bai8";
// import {Cat,Dog} from "./bai11"
// import { Birds,Fish } from "./bai12";
// import { Square,Cricle } from "./bai13";
// import { Manager,Developer } from "./bai14";
// import { Library } from "./bai15";
// import { Book } from "./bai6";
// import { Box } from "./bai16";
// import { Logger } from "./bai17";
// import { MathUtil } from "./bai18";
// import { Car1, Bike } from "./bai20";
// import { Repository } from "./bai21";
// import { Stack } from "./bai22";
// import { CardPayment,CashPayment } from "./bai23";
// import { Fan,AirConditioner } from "./bai24";
// import { Shape1 } from "./bai25";
const bai2_1 = require("./bai2");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai30_1 = require("./bai30");
const bai8_1 = require("./bai8");
// //Bai 1
// console.log("---------------Bai 1-----------------")
// const person = new Person("Duy", 21);
// person.display();
// //Bai 2
// console.log("---------------Bai 2-----------------")
// const student = new Student("Duy",21, 12)
// student.display()
// //Bai 3
// console.log("---------------Bai 3-----------------")
// const car = new Car("Mercedes","Modern", 2004)
// car.showCarInfo()
// //Bai 4
// console.log("---------------Bai 4-----------------")
// const rectangle = new Rectangle(4,3)
// console.log(`Area : ${rectangle.area()}, Perimeter : ${rectangle.perimeter()}`)
// //Bai 5
// console.log("---------------Bai 5-----------------")
// const bankAccount = new BankAccount(10);
// bankAccount.deposit(5);
// bankAccount.withdraw(20);
// bankAccount.withdraw(10);
// //Bai 6 : Tao class Book
// //Bai 7
// console.log("---------------Bai 7-----------------")
// const user = new User("Duy");
// console.log(user.getName());
// user.setName("Thai Duy");
// console.log(user.getName());
// //Bai 8
// console.log("---------------Bai 8-----------------")
// const product = new Product("A",90);
// const product1 = new Product("B",110);
// const product2 = new Product("C",200);
// const product3 = new Product("D",80);
// const products : Product[] = [product,product1,product2,product3]
// const recentProduct = products.filter(p => p.getPrice() > 100)
// console.log(recentProduct)
// //Bai 9 : Tao interface Animal
// //Bai 10 : Tao Class Account
// //Bai 11 :
// console.log("---------------Bai 11-----------------")
// const cat = new Cat("TDuy")
// const dog = new Dog("TDui");
// cat.meow();
// dog.bark();
// //Bai 12 :
// console.log("---------------Bai 12-----------------")
// const fish = new Fish("Ca Chep")
// const bird = new Birds("Chim Cu");
// fish.swim();
// bird.fly();
// //Bai 13 :
// console.log("---------------Bai 13-----------------")
// const square = new Square(4);
// const cricle = new Cricle(3);
// console.log(square.area());
// console.log(cricle.area());
// //Bai 14 :
// console.log("---------------Bai 14-----------------")
// const manager = new Manager("Duy","Lead")
// const dev = new Developer("NDuy","ReactNative");
// manager.manageTask();
// dev.code();
// //Bai 15 :
// console.log("---------------Bai 15-----------------")
// const library = new Library();
// library.addBook(new Book("React","Duy",2004))
// library.getBook()
// //Bai 16 :
// console.log("---------------Bai 16-----------------")
// const number = new Box<number>(123)
// console.log(number.getValue());
// const number1 = new Box<string>("Duy")
// console.log(number1.getValue());
// //Bai 17 :
// console.log("---------------Bai 17-----------------")
// const logger = Logger.getInstance();
// logger.log("Loi")
// //Bai 18 :
// console.log("---------------Bai 18-----------------")
// console.log(MathUtil.add(5, 3));       // 8
// console.log(MathUtil.subtract(10, 4)); // 6
// console.log(MathUtil.multiply(6, 7));  // 42
// console.log(MathUtil.divide(20, 5));   // 4
// //Bai 19 :
// console.log("---------------Bai 19-----------------")
// const cat1 = new Cat("LuBU");
// const dog1 = new Dog("TV");
// cat1.makeSound()
// dog1.makeSound();
// //Bai 20 :
// console.log("---------------Bai 20-----------------")
// const car1 = new Car1("Toyota",100)
// const bike = new Bike("ThongNhat",5);
// console.log(car1.getInfo());
// console.log(bike.getInfo());
// //Bai 21:
// console.log("---------------Bai 21-----------------")
// const numberRepo = new Repository<number>();
// numberRepo.add(10);
// numberRepo.add(20);
// console.log(numberRepo.getAll()); 
// const stringRepo = new Repository<string>();
// stringRepo.add("Hello");
// stringRepo.add("World");
// console.log(stringRepo.getAll()); 
// //Bai 22:
// console.log("---------------Bai 22-----------------")
// const numberStack = new Stack<number>();
// numberStack.push(10);
// numberStack.push(20);
// numberStack.push(30);
// console.log(numberStack.peek()); // 30
// console.log(numberStack.pop());  // 30
// console.log(numberStack.peek()); // 20
// console.log(numberStack.isEmpty()); // false
// // Stack rỗng
// const stringStack = new Stack<string>();
// console.log(stringStack.isEmpty()); // true
// stringStack.push("Hello");
// stringStack.push("World");
// console.log(stringStack.pop()); // "World"
// console.log(stringStack.peek()); // "Hello"
// //Bai 23:
// console.log("---------------Bai 23-----------------")
// const cash = new CashPayment();
// cash.pay(100);
// const card = new CardPayment("1234-5678-9876-5432");
// card.pay(250); 
// //Bai 24:
// console.log("---------------Bai 24-----------------")
// const fan = new Fan();
// const airConditioner = new AirConditioner();
// fan.turnOn()
// airConditioner.turnOn()
// //Bai 25:
// console.log("---------------Bai 25-----------------")
// Shape1.describe();
//Bai 26:
console.log("---------------Bai 26-----------------");
const order = new bai26_1.Order([new bai8_1.Product("Laptop", 10.5), new bai8_1.Product("Car", 1.2)]);
console.log("Total price:", order.calculateTotalPrice());
//Bai 27:
console.log("---------------Bai 27-----------------");
const teacher = new bai27_1.Teacher("Duy", 21, "Software Engineering");
teacher.introduce();
//Bai 28:
console.log("---------------Bai 28-----------------");
const dog = new bai28_1.Dog();
const cat = new bai28_1.Cat();
dog.speak();
cat.speak();
//Bai 29:
console.log("---------------Bai 29-----------------");
const car = new bai29_1.Car();
car.move();
//Bai 30:
console.log("---------------Bai 30-----------------");
const s1 = new bai2_1.Student("Duy", 21, 12);
const s2 = new bai2_1.Student("NDuy", 21, 10);
const t1 = new bai27_1.Teacher("Hi", 35, "HUUU");
const t2 = new bai27_1.Teacher("Ha", 40, "HAAHA");
const school = new bai30_1.School([s1, s2], [t1, t2]);
school.displayInfo();
