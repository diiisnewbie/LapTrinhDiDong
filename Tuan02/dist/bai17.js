"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iteratePromises = iteratePromises;
const bai14_1 = require("./bai14");
async function iteratePromises() {
    const promises = [(0, bai14_1.multiplyAfterDelay)(2), (0, bai14_1.multiplyAfterDelay)(3), (0, bai14_1.multiplyAfterDelay)(4)];
    for await (const result of promises) {
        console.log("Iterated Result:", result);
    }
}
