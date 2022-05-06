import React, { useState } from "react";
import ToDo from "./ToDo";

const ToDoList = ({
  todos,
  setToDos,
  filteredTodos,
  setInputText,
  setToggleSubmit,
  setEditTodo,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <ToDo
            text={todo.text}
            key={todo.id}
            setToDos={setToDos}
            todo={todo}
            todos={todos}
            setInputText={setInputText}
            setToggleSubmit={setToggleSubmit}
            setEditTodo={setEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
