import React, { useReducer, useEffect } from "react";
import "./style.css";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
export const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      desc: "Aprender React",
      done: false,
    },
  ];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos") || []);

    //   return [{
    //       id: new Date().getTime(),
    //       desc: "Aprender React",
    //       done: false,
    //     },
    //   ];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //AGREGAR CUALQUIER CAMBIO EN EL LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleAddTodo = (newTodo) => {
    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>

        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
