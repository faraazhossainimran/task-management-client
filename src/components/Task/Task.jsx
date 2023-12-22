import { useDrag } from "react-dnd";
import toast from "react-hot-toast";

const Task = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  const handleRemove = (id) => {
    console.log(id);
    const updatedTasks = tasks.filter((filteredTask) => filteredTask.id !== id);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);

    toast("Task removed", { icon: "🫡" });
  };

  return (
    <div className="relative p-4 mt-8 shadow-md rounded-md">
      <div
        ref={drag}
        className={`flex items-center justify-between ${
          isDragging ? "opacity-25" : "opacity-100"
        } cursor-grab`}
      >
        {/* Position text, priority, and button on the same line */}
        <div className="flex items-center">
          <p>{task.name}</p>
          <div className="ml-4 badge badge-primary">{task.priority}</div>
        </div>
        <button
          onClick={() => handleRemove(task.id)}
          className="text-slate-600"
        >
          Delete
        </button>
      </div>
      <div className="mt-4">
        {/* Position description below */}
        {task.description}
      </div>
    </div>
  );
};
export default Task;
