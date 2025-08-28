"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failPromise = failPromise;
function failPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
