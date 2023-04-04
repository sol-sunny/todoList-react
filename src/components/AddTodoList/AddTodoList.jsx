import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //랜덤id

export default function AddTodoList({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //form 리프레쉬 막아줌
    if (text.trim().length === 0) {
      //trim이란 양옆의 여백을 지워주는것, 즉 스페이스나 아무것도 쓰여지지않은 value는 추가되지않도록 해줌
      return; //빈값 리턴되도록
    }
    onAdd({ id: uuidv4(), text: text, status: "active" });
    setText(""); //todo추가하면 input창 비워지도록
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Your Todo"
        value={text}
        onChange={handleChange}
      />
      <button>+Add</button>
    </form>
  );
}
