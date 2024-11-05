import React from "react";
import TodoApp from "./components/TodoApp";
import Background from "./components/Background";
const App = () => {
  return (
    <>
      <div className="contain w-full min-h-screen flex justify-center">
      <Background />
        <TodoApp />
    </div>
    </>
  );
};

export default App;
