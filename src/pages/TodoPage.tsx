import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";

const TodoPage = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoContext();
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <div className="flex items-center w-full max-w-md space-x-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleAddTodo}
          className="p-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white"
        >
          <FaPlus />
        </button>
      </div>
      <ul className="w-full max-w-md space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-4 rounded-md ${
              todo.completed ? "bg-green-700" : "bg-gray-800"
            }`}
          >
            <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
              {todo.text}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => toggleTodo(todo.id)}
                className="p-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
              >
                <FaCheck />
              </button>
              <button
                onClick={() => removeTodo(todo.id)}
                className="p-2 rounded-md bg-red-500 hover:bg-red-600 text-white"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
