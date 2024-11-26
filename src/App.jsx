import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalItems from "./components/TotalItems";
const App = () => {
  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        <div className="flex items-center mt-7 gap-2">
          <h1 className="text-3xl font-semibold"> To-do List</h1>
        </div>
        <AddTodoForm />
        <TodoList />
        <TotalItems />
      </div>
    </div>
  );
};

export default App;
