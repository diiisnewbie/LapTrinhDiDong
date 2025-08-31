import { simulateTask } from "./bai05";

export async function queueProcess() {
  const ids = [1, 2, 3, 4, 5];
  for (const id of ids) {
    const result = await simulateTask(id);
    console.log("Queue Result:", result);
  }
}
