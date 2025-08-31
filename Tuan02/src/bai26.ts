export async function wait5Seconds() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log("5 seconds passed");
}
