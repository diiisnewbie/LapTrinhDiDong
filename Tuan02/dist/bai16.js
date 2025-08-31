"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelCalls = parallelCalls;
const bai14_1 = require("./bai14");
async function parallelCalls() {
    const results = await Promise.all([
        (0, bai14_1.multiplyAfterDelay)(2),
        (0, bai14_1.multiplyAfterDelay)(3),
        (0, bai14_1.multiplyAfterDelay)(4)
    ]);
    console.log("Parallel Results:", results);
}
