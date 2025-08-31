"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = downloadFile;
async function downloadFile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("File downloaded");
            resolve();
        }, 3000);
    });
}
