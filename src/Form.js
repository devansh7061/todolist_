import React from "react";
const uuid = require("uuid").v4;

const Form = ({
  setInputText,
  todos,
  setToDos,
  inputText,
  setStatus,
  setToggleSubmit,
  toggleSubmit,
  isEditTodo,
  setEditTodo,
  setFilteredTodos,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setToDos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: uuid(),
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };
  const editTextHandler = (e) => {
    e.preventDefault();
    setToDos(
      todos.map((item) => {
        if (item.id === isEditTodo) {
          return {
            ...item,
            text: inputText,
          };
        }
        return item;
      })
    );
    setInputText("");
    setToggleSubmit(false);
  };
  const filterHandler = (e) => {
    e.preventDefault();
    setFilteredTodos(todos.filter((todo) => todo.text == inputText));
    console.log(inputText);
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />
      {toggleSubmit ? (
        <>
          <button onClick={editTextHandler} className="todo-button" type="edit">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button onClick={filterHandler} className="todo-button" type="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={submitToDoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus-square"></i>
          </button>
          <button onClick={filterHandler} className="todo-button" type="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </>
      )}
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
