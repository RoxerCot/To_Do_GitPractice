import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, removeToDo, updateToDo }) => {
  return (
    <Droppable droppableId="toDos">
      {(dropProvider) => (
        <div
          ref={dropProvider.innerRef}
          {...dropProvider.droppableProps}
          className="overflow-hidden rounded-t-md bg-white [&>article]:p-4 mt-8 dark:bg-gray-800 duration-1000 transition-all "
        >
          {toDos.map((toDo, index) => (
            <Draggable key={toDo.id} index={index} draggableId={`${toDo.id}`}>
              {(dragProvider) => (
                <ToDoItem
                  toDo={toDo}
                  removeToDo={removeToDo}
                  updateToDo={updateToDo}
                  ref={dragProvider.innerRef}
                  {...dragProvider.dragHandleProps}
                  {...dragProvider.draggableProps}
                  /**
                   * Se modifico ToDoItem para poder accer al innerRef
                   * los componentes inventados necesitan este metodo en el uso de algunas librerias reutilizables
                   */
                />
              )}
            </Draggable>
          ))}
          {dropProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default ToDoList;
