"use client";

import { useState } from "react";

// SERVER SIDE RENDERING -> FANCY REST
// CLIENT SIDE RENDERING -> HOT POT
// STATIC SITE GENERATE -> BUFFET

const StateIndex = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "sleep",
      checked: false,
    },
  ]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, title: input }]);
    setInput("");
  };

  const handleCheck = (id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <main className="container" style={{ padding: "20px 0" }}>
      <input value={input} type="text" onChange={(e) => setInput(e.target.value)} />

      <button onClick={handleClick}>add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input onClick={() => handleCheck(todo.id)} type="checkbox" checked={todo.checked} />
            {todo.title}
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default StateIndex;
