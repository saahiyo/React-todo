import React, { useState, useEffect } from "react";
import TodoHeader from "./TodoHeader";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    // Get stored todos on initial render
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return alert("Please enter a task");
    setTodos([...todos, { task: todo, isCompleted: false, id: Date.now() }]);
    setTodo("");
  };

  return (
    <div className="todo-container p-10 w-full mx-auto flex flex-col items-center">
      <TodoHeader />
      <form
        className="input-container mt-5 mb-5 w-1/2 relative"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add new task.."
          className="w-full p-4 rounded-md outline-none bg-zinc-800 text-white relative"
        />
        <AddTodo />
      </form>
      <div className="list-container flex flex-col gap-3 w-1/2">
        <TodoList todo={todo} todos={todos} setTodos={setTodos} />
      </div>
      <div className="taskStatus w-1/2">
        <h3 className="text-zinc-700 mt-2">
          {todos.filter(todo => todo.isCompleted).length} completed out of {todos.length} total tasks
        </h3>
      </div>
    </div>
  );
};

export default TodoApp;