import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = `Todo (${todos.filter((t) => !t.completed).length})`;
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const editTodo = (id, text) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text }
          : todo
      )
    );
  };

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">

        <Header />

        <TodoForm addTodo={addTodo} />

        <div className="mt-4 bg-blue-100 text-blue-700 p-3 rounded-lg font-semibold">
          Todo belum selesai : {remaining}
        </div>

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />

      </div>
    </div>
  );
}

export default App;