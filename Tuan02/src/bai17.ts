import { multiplyAfterDelay } from "./bai14";

export async function iteratePromises() {
  const promises = [multiplyAfterDelay(2), multiplyAfterDelay(3), multiplyAfterDelay(4)];

  for await (const result of promises) {
    console.log("Iterated Result:", result);
  }
}
