"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTask13 = runTask13;
const simulateTask1 = (time, shouldFail = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Task failed ❌");
            }
            else {
                resolve("Task completed ✅");
            }
        }, time);
    });
};
async function runTask13() {
    try {
        const result = await simulateTask1(2000, true); // true -> cố tình fail
        console.log(result);
    }
    catch (error) {
        console.error("Caught an error:", error);
    }
}
