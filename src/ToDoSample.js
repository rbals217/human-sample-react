import { useEffect, useState } from "react";
import "./App.css";

const sample = [
  { id: 1, text: "HTML 연습" },
  { id: 2, text: "CSS 복습" },
  { id: 3, text: "자바스크립트이해" },
  { id: 4, text: "리액트프로젝트" },
];

const ToDoSample = () => {
  const [todoData, setTodoData] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : sample;
  });
  const [inputText, setInputText] = useState(""); // 입력에 대한 상태 관리
  const [nextId, setNextId] = useState(5); // id 증가에 대한 상태 관리

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoData));
  }, [todoData]); // 초기값이 없으면 todos  있으면 로컬스토리지에 저장  어떨때 넣냐 useeFfect < 랜더링 이후 다음동작 (tododata)
  // 빈배열엔ㄴ 마운트 빈배열 아무것도 안불러와짐 현재는 todos에 json 직렬화 , tododata를 json형태로 저장
  const onClick = () => {
    const nextTodos = [...todoData, { id: nextId, text: inputText }];
    setNextId(nextId + 1); // id를 1 증가 시킴
    setTodoData(nextTodos);
    setInputText(""); // input 창을 지워 줌
  };
  const onRemove = (id) => {
    const nextTodos = todoData.filter((todo) => todo.id !== id);
    setTodoData(nextTodos); // 조건에 맞으면 반환 안맞으면 반환 x
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.nativeEvent.iscomposing) addItem();
  };

  const addItem = () => {
    if (!inputText.trim()) return; // 빈 값 방지
    const nextTodos = [...todoData, { id: nextId, text: inputText }];
    setNextId(nextId + 1);
    setTodoData(nextTodos);
    setInputText("");
  };
  return (
    <>
      <div className="todo-container">
        <h2 className="todo-title">할일 목록</h2>
        <div className="todo-form">
          <input
            className="todo-input"
            type="text"
            placeholder="할 일을 입력하세요"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button onClick={onClick}>추가</button>

        <ul className="todo-list">
          {todoData &&
            todoData.map((todo) => (
              <li
                className="todo-item"
                key={todo.id}
                onDoubleClick={() => onRemove(todo.id)}
              >
                {todo.text}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoSample;
