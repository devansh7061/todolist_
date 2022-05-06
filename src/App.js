import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./ToDoList";
import "./App.css";
import ToDoList from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(false);
  const [isEditTodo, setEditTodo] = useState(null);
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setToDos={setToDos}
        inputText={inputText}
        setStatus={setStatus}
        setToggleSubmit={setToggleSubmit}
        toggleSubmit={toggleSubmit}
        isEditTodo={isEditTodo}
        setEditTodo={setEditTodo}
        setFilteredTodos={setFilteredTodos}
      />
      <ToDoList
        todos={todos}
        setToDos={setToDos}
        filteredTodos={filteredTodos}
        setInputText={setInputText}
        setToggleSubmit={setToggleSubmit}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}

export default App;
