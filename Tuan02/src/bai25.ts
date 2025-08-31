export async function downloadFile() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("File downloaded");
      resolve();
    }, 3000);
  });
}
