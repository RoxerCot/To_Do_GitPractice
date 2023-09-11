import { useState } from "react";

const ToDoAdd = ({ addToDo }) => {
  const [title, setTitle] = useState("");
  const handleSubmitAddToDo = (e) => {
    e.preventDefault();
    if (!title.trim().length > 0) {
      return setTitle("");
    }
    addToDo(title);
    setTitle("");
  };
  return (
    <form
      onSubmit={handleSubmitAddToDo}
      className=" flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
    </form>
  );
};
export default ToDoAdd;
