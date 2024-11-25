import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAsync } from "../Redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
 console.log(todos)
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
