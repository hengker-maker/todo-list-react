import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim() === "") return;
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow mb-3">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        {isEditing ? (
          <input
            className="border rounded px-2 py-1 w-full"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span
            className={`${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 ml-3">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Simpan
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default TodoItem;