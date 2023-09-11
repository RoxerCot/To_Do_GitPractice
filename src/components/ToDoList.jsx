import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, removeToDo, updateToDo }) => {
  return (
    <div className="rounded-t-md bg-white [&>article]:p-4 mt-8">
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
