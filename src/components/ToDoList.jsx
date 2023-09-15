import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, removeToDo, updateToDo }) => {
  return (
    <div className="overflow-hidden rounded-t-md bg-white [&>article]:p-4 mt-8 dark:bg-gray-800 duration-1000 transition-all ">
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          removeToDo={removeToDo}
          updateToDo={updateToDo}
        />
      ))}
    </div>
  );
};
export default ToDoList;
