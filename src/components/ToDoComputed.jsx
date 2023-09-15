const ToDoComputed = ({ countItems, clearCompleted }) => {
  return (
    <section className="dark:bg-gray-800 flex justify-between px-4 py-4 bg-white rounded-b-md transition-all duration-1000">
      <span className="text-gray-400">{countItems} Items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
};
export default ToDoComputed;
