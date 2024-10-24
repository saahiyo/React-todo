import React from "react";
import { Plus } from "lucide-react";

const AddTodo = () => {
  return (
    <button className="btn rounded-md text-white px-4 bg-zinc-800 h-full absolute right-2 top-1/2 -translate-y-1/2">
      <Plus size={25} />
    </button>
  );
};

export default AddTodo;
