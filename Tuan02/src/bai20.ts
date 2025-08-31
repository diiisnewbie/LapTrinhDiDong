import { fetchUser } from "./bai18";

export async function fetchUserWithTimeout(id: number): Promise<{ id: number; name: string }> {
  const apiCall = fetchUser(id);

  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), 2000)
  );

  return Promise.race([apiCall, timeout]);
}
