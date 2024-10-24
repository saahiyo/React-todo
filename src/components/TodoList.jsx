import { Check, X } from "lucide-react";
import React from "react";

const TodoList = ({ todo, todos, setTodos }) => {

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      {todos.map((todo, i) => (
        <div
          key={i}
          className="todoList w-full bg-zinc-800 rounded-md p-4 flex justify-between items-center hover:opacity-100 group"
        >
          <div className="left flex items-center gap-3">
            <div className="checkbox w-6 h-6 border-2 border-white rounded-full flex justify-center items-center hover:scale-125 transition-transform">
              {todo.isCompleted ? (
                <Check size={10} strokeWidth={1.2} color="white" />
              ) : (
                <div className="w-full h-full rounded-full" onClick={()=> handleComplete(i)}></div>
              )}
            </div>
            <h1 className="text-white text-lg">{todo.task}</h1>
          </div>
          <X
            strokeWidth={1.5}
            color="white"
            size={20}
            className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => handleDelete(i)}
          />
        </div>
      ))}
    </>
  );
};

export default TodoList;
