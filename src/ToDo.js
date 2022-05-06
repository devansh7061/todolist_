import React from "react";

const ToDo = ({
  text,
  todos,
  todo,
  setToDos,
  setInputText,
  setToggleSubmit,
  setEditTodo,
}) => {
  const deleteHandler = () => {
    setToDos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setToDos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const editHandler = () => {
    todos.map((item) => {
      if (item.id === todo.id) {
        setToggleSubmit(true);
        setEditTodo(item.id);
        setInputText(item.text);
      }
    });
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fa-solid fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="complete-btn">
        <i className="fa-solid fa-trash"></i>
      </button>
      <button className="complete-btn" onClick={editHandler}>
        <i className="fa-solid fa-pen"></i>
      </button>
    </div>
  );
};

export default ToDo;
