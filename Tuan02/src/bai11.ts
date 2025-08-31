export const helloAsyncAwait = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // chờ 2s
  return "Hello Async";
};
