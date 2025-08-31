import { myPromise } from "./bai01";
import { getNumber } from "./bai02";
import { failPromise } from "./bai03";
import { getRandomNumber } from "./bai04";
import { simulateTask } from "./bai05";
import { filterEvenNumber } from "./bai09";
import { task } from "./bai10";
import { helloAsyncAwait } from "./bai11";
import { runTask } from "./bai12";
import { runTask13 } from "./bai13";
import { multiplyAfterDelay } from "./bai14";
import { sequentialCalls } from "./bai15";
import { parallelCalls } from "./bai16";
import { iteratePromises } from "./bai17";
import { fetchUser } from "./bai18";
import { fetchUsers } from "./bai19";
import { fetchUserWithTimeout } from "./bai20";
import { getTodo } from "./bai21";
import { getMultipleTodos } from "./bai22";
import { getCompletedTodos } from "./bai23";
import { postData } from "./bai24";
import { downloadFile } from "./bai25";
import { wait5Seconds } from "./bai26";
import { fetchWithRetry } from "./bai27";
import { batchProcess } from "./bai28";
import { queueProcess } from "./bai29";
import { testAllSettled } from "./bai30";
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
// task(true).then((result) => console.log(result))
//             .catch((err) => console.error(err))
//             .finally(() =>console.log("Done"))

// task(false).then((result) => console.log(result))
//             .catch((err) => console.error(err))
//             .finally(() =>console.log("Done"))

//Bài 11:
// helloAsyncAwait().then(console.log)

//Bài 12:
// runTask()

//Bài 13:
// runTask13()

//Bài 14:
// multiplyAfterDelay(2).then(console.log)
//Bài 15:
// sequentialCalls()

//Bài 16:
// parallelCalls()
//Bài 17:
// iteratePromises()
//Bài 18:
// fetchUser(1).then(console.log)
//Bài 19:
// fetchUsers([1,2,3,4]).then(console.log)
//Bài 20:
// fetchUserWithTimeout(5).then(console.log)

//Bài 21:
// getTodo()

//Bài 22:
// getMultipleTodos()

//Bài 23:
// getCompletedTodos()

//Bài 24:
// postData()


//Bài 25:
// downloadFile()


//Bài 26:
// wait5Seconds()


//Bài 27:
// fetchWithRetry("ád",1)


//Bài 28:
// batchProcess()

//Bài 29:
// queueProcess()


//Bài 30:
testAllSettled()