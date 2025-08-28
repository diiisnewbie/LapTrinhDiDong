"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
const task = (status) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (status) {
            resolve("Task successded");
        }
        else {
            reject("Task failed");
        }
    }, 100);
});
exports.task = task;
