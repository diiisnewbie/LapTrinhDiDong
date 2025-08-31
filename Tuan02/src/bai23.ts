export async function getCompletedTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: { id: number; title: string; completed: boolean }[] = await res.json();
  const completed = todos.filter(todo => todo.completed);
  console.log("Completed Todos:", completed);
}
