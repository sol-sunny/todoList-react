import React, { useState } from "react";
import AddTodoList from "../AddTodoList/AddTodoList";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);
  const handleAdd = (todo) => {
    //새로운 투두를 todos에 업데이트한다.
    //console.log(todo);
    setTodos([...todos, todo]);  //기존의 todos보여주고, 새로운 todo추가
  };
  return (
    <div>
      <section>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </section>
      <AddTodoList onAdd={handleAdd} />{" "}
      {/* 'AddTodoList에서 투두가 추가(onAdd)되면 나한테 알려줘'하는 콜백함수{handleAdd}를 추가 */}
    </div>
  );
}
