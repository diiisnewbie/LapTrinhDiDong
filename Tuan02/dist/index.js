"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai10_1 = require("./bai10");
// //Bài 01:
// myPromise.then((message) => console.log(message))
//Bài 02:
// console.log("--------------Bai 02-------------")
// getNumber().then((num) =>console.log(num))
//Bài 03:
// failPromise().then((result) => console.log(result))
//             .catch((error) => console.error(error))
//Bài 04:
// Sử dụng .then() và .catch()
// getRandomNumber()
//   .then((result) => {
//     console.log("Random number:", result);
//   })
//   .catch((err) => {
//     console.error("Error:", err.message);
//   });
//Bài 05:
// simulateTask(2000).then((msg) => console.log(msg))
//Bài 06:
// Promise.all([
//     simulateTask(1000),
//     simulateTask(2000),
//     simulateTask(3000),
// ]).then((result) =>{
//     console.log("All tasks finished");
//     console.log(result)
// })
//Bài 07:
// Promise.race([
//   simulateTask(3000),
//   simulateTask(1500),
//   simulateTask(2000)
// ]).then((result) => {
//   console.log("First finished:", result);
// });
//Bài 08:
// Promise.resolve(2)
//   .then(num => num * num)      
//   .then(num => num * 2)         
//   .then(num => num + 5)         
//   .then(result => {
//     console.log("Final result:", result); 
//   });
//Bài 09:
// filterEvenNumber([1,2,3,4,5,6,7]).then((arrEvenNumber) => console.log(arrEvenNumber))
//Bài 10:
(0, bai10_1.task)(true).then((result) => console.log(result))
    .catch((err) => console.error(err))
    .finally(() => console.log("Done"));
(0, bai10_1.task)(false).then((result) => console.log(result))
    .catch((err) => console.error(err))
    .finally(() => console.log("Done"));
