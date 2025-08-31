"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchProcess = batchProcess;
async function simulateTask28(id) {
    return new Promise(resolve => setTimeout(() => resolve(`Task ${id} done`), 1000 * id));
}
async function batchProcess() {
    const tasks = [1, 2, 3, 4, 5].map(id => simulateTask28(id));
    const results = await Promise.all(tasks);
    console.log("Batch Results:", results);
}
