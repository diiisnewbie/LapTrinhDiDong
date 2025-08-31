"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait5Seconds = wait5Seconds;
async function wait5Seconds() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("5 seconds passed");
}
