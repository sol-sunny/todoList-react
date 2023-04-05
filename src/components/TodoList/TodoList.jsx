import React, { useState } from "react";
import AddTodoList from "../AddTodoList/AddTodoList";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({filter}) {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);
  const handleAdd = (todo) => {
    //AddTodoList함수에서 변화가 일어난것을 todo로 지정한다.
    //새로운 투두를 todos에 업데이트한다.
    //console.log(todo);
    setTodos([...todos, todo]); //기존의 todos보여주고, 새로운 todo추가
  };

  const handleUpdate = (updated) => {
    //Todo함수에서 변화가 일어나면 그것을 updated라고하고 map을 돌려 각 아이템이 변화가 일어난 id와 같으면 변화된updated를 실행한다.
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = (deleted) => {
    //Todo함수에서 변화 즉 삭제버튼을 눌렀다면 필터를 실행해라.
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  const filtered = getFilteredItems(todos, filter);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filtered.map((item) => (
            // <li key={item.id}>{item.text}</li>
            <Todo //Todo 함수 불러온다.
              key={item.id}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <AddTodoList onAdd={handleAdd} />
      </section>
      {/* 'AddTodoList에서 투두가 추가(onAdd)되면 나한테 알려줘'하는 콜백함수{handleAdd}를 추가 */}
    </>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
