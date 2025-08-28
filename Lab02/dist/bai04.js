"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = getRandomNumber;
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 10); // số ngẫu nhiên từ 0 đến 9
        if (num >= 3) {
            resolve(num); // thành công nếu số >= 3
        }
        else {
            reject(new Error("Number too small: " + num)); // thất bại nếu số < 3
        }
    });
}
