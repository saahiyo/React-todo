import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
    console.log(todo);
    
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="main-div">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button>add task</button>
        </form>
        <div className="todos">
          <ul>
            {todos.map((todo, i) => (
              <li key={i}>
                {todo}
                <button onClick={() => handleDelete(i)}>delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
