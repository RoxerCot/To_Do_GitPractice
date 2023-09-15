import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoAdd from "./components/ToDoAdd";
import ToDoComputed from "./components/ToDoComputed";
import ToDoFilter from "./components/ToDoFilter";
import ToDoList from "./components/ToDoList";

const initialStateToDo = [
  { id: 1, title: "Go to Js Course", completed: true },
  { id: 2, title: "Meditation", completed: true },
  { id: 3, title: "Pick up groceries", completed: true },
  { id: 4, title: "Do Laundry", completed: true },
];
const App = () => {
  const [toDos, SetToDos] = useState(initialStateToDo);
  const addToDo = (title) => {
    const newToDo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };
    SetToDos([...toDos, newToDo]);
  };
  const removeToDo = (id) => {
    SetToDos(toDos.filter((toDo) => toDo.id !== id));
  };
  const updateToDo = (id) => {
    SetToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };
  const countItems = toDos.filter((toDo) => !toDo.completed).length;
  const clearCompleted = () => {
    SetToDos(toDos.filter((toDo) => !toDo.completed));
  };
  const [filter, setFilter] = useState("all");
  const changeFilter = (filter) => setFilter(filter);
  const filteredToDos = () => {
    switch (filter) {
      case "all":
        return toDos;
      case "active":
        return toDos.filter((toDo) => !toDo.completed);
      case "completed":
        return toDos.filter((toDo) => toDo.completed);
      default:
        return toDos;
    }
  };
  return (
    <div
      className="min-h-screen bg-gray-300  
    bg-[url('./images/bg-mobile-light.jpg')] bg-contain bg-no-repeat 
    dark:bg-gray-900 dark:bg-[url('./images/bg-mobile-dark.jpg')] duration-300 transition-all"
    >
      <Header />
      <main className="container mx-auto mt-8 px-4 ">
        <ToDoAdd addToDo={addToDo} />
        <ToDoList
          toDos={filteredToDos()}
          removeToDo={removeToDo}
          updateToDo={updateToDo}
        />
        <ToDoComputed countItems={countItems} clearCompleted={clearCompleted} />
        <ToDoFilter changeFilter={changeFilter} filter={filter} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
