"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchWithRetry = fetchWithRetry;
async function fetchWithRetry(url, retries) {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await fetch(url);
            if (!res.ok)
                throw new Error("HTTP error");
            return await res.json();
        }
        catch (err) {
            console.warn(`Attempt ${i + 1} failed`);
            if (i === retries - 1)
                throw err;
        }
    }
}
