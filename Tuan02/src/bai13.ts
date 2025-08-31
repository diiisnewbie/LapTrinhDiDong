


const simulateTask1 = (time: number, shouldFail: boolean = false): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Task failed ❌");
            } else {
                resolve("Task completed ✅");
            }
        }, time);
    });
}; 

export async function runTask13() {
    try {
        const result = await simulateTask1(2000,true); // true -> cố tình fail
        console.log(result);
    } catch (error) {
        console.error("Caught an error:", error);
    }
}