import IconCross from "./IconCross";
import IconCheck from "./IconCheck";
import React from "react";

const ToDoItem = React.forwardRef(
  ({ toDo, removeToDo, updateToDo, ...props }, ref) => {
    const { id, title, completed } = toDo;
    return (
      <article
        {...props}
        ref={ref}
        className="flex gap-4 border-b border-b-gray-400  "
      >
        {/**<button className="inline-block h-5 w-5 flex-none rounded-full border-2">
        <IconCheck />
      </button> */}
        <button
          className={`h-5 w-5 flex-none rounded-full border-2 ${
            completed
              ? "flex justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  place-items-center"
              : "inline-block"
          }`}
          onClick={() => updateToDo(id)}
        >
          {completed && <IconCheck />}
        </button>
        <p
          className={`grow text-gray-600  dark:text-gray-400 ${
            completed && "line-through"
          }`}
        >
          {title}
        </p>
        <button className="flex-none" onClick={() => removeToDo(id)}>
          <IconCross />
        </button>
      </article>
    );
  }
);
export default ToDoItem;
