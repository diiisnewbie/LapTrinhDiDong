"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserWithTimeout = fetchUserWithTimeout;
const bai18_1 = require("./bai18");
async function fetchUserWithTimeout(id) {
    const apiCall = (0, bai18_1.fetchUser)(id);
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), 2000));
    return Promise.race([apiCall, timeout]);
}
