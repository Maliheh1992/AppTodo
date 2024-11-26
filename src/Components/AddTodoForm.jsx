import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    dispatch(
      addTodoAsync({
        title: value,
      })
    );
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center my-7 bg-gray-200 rounded-full"
    >
      <input
        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        type="text"
        placeholder="Add your task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="submit"
        className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
      >
        ADD +
      </button>
    </form>
  );
};

export default AddTodoForm;
