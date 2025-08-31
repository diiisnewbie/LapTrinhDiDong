"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompletedTodos = getCompletedTodos;
async function getCompletedTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    const completed = todos.filter(todo => todo.completed);
    console.log("Completed Todos:", completed);
}
