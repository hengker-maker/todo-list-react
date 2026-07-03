import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-5">
      <input
        className="border rounded-lg p-2 flex-1"
        type="text"
        placeholder="Tambah Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="bg-green-500 text-white px-4 rounded-lg">
        Tambah
      </button>
    </form>
  );
}

export default TodoForm;