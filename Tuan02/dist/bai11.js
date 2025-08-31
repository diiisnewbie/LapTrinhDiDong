"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloAsyncAwait = void 0;
const helloAsyncAwait = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // chờ 2s
    return "Hello Async";
};
exports.helloAsyncAwait = helloAsyncAwait;
