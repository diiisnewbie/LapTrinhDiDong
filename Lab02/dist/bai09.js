"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterEvenNumber = void 0;
const filterEvenNumber = (array) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(array.filter((num) => num % 2 === 0));
    }, 1000);
});
exports.filterEvenNumber = filterEvenNumber;
