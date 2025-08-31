"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueProcess = queueProcess;
const bai05_1 = require("./bai05");
async function queueProcess() {
    const ids = [1, 2, 3, 4, 5];
    for (const id of ids) {
        const result = await (0, bai05_1.simulateTask)(id);
        console.log("Queue Result:", result);
    }
}
