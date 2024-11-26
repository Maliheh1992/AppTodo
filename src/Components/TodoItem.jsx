import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, toggleCompleteAsync } from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleCompleted = () => {
    dispatch(
      toggleCompleteAsync({
        id,
        completed: !completed,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodoAsync({ id }));
  };
  return (
    <li
      className={
        "flex items-center my-3 gap-2 border-2 border-slate-200 rounded-md p-2 "
      }
    >
      <div className="flex flex-1 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          className="w-7"
          onChange={handleCompleted}
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            completed ? "line-through opacity-50" : ""
          }`}
        >
          {title}
        </p>
      </div>
      <button onClick={handleDelete}>
        <FaRegTrashCan className="text-red-600" />
      </button>
    </li>
  );
};

export default TodoItem;
