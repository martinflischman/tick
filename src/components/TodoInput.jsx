import { useState } from "react";

export function TodoInput() {
  const [todoText, setTodoText] = useState("");

  return (
    <div className="join">
      <label className="input">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="e.g. Water the plants"
        />
      </label>
      <button className="btn btn-primary join-item">+ Add</button>
    </div>
  );
}
