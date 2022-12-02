import TodoList from "./components/TodoList";
import c from "./App.module.css"
import TodoForm from "./components/TodoForm";
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className={c.app}>
      <div className={c.app__inner}>
        <h1 className={c.inner__title}>TODOS</h1>
        <TodoForm
          saveTodo={todoText => {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
              setTodos([...todos, todoText])
            }
          }} />
        <TodoList todos={todos} deleteTodo={todoIndex => {
          const newTodos = todos.filter((el, index) => index !== todoIndex)
          setTodos(newTodos)
        }} />
      </div>
    </div>
  );
}

export default App;
