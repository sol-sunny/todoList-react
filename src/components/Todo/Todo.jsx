import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
//   const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);   //todo전체 삭제
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={todo.status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{todo.text}</label>
      <span>
        <button onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
