import React from "react";
import { useSelector } from "react-redux";
const TotalItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  return (
    <h4 className="mt-4 font-semibold">Total Complete Items: {completedTodos.length}  ✅</h4>
  );
};

export default TotalItems;
