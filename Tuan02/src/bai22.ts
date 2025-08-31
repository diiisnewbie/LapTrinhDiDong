export async function getMultipleTodos() {
  const ids = [1, 2, 3];
  for (const id of ids) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = await res.json();
    console.log(`Todo ${id}:`, todo);
  }
}
