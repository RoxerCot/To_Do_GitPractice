const ToDoComputed = ({ countItems, clearCompleted }) => {
  return (
    <section className="flex justify-between px-4 py-4 bg-white rounded-b-md">
      <span className="text-gray-400">{countItems} Items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
};
export default ToDoComputed;
