import { multiplyAfterDelay } from "./bai14";

export async function parallelCalls() {
  const results = await Promise.all([
    multiplyAfterDelay(2),
    multiplyAfterDelay(3),
    multiplyAfterDelay(4)
  ]);
  console.log("Parallel Results:", results);
}
