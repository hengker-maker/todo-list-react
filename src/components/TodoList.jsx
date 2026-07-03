import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  return (
    <div className="mt-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;