import { useDrop } from "react-dnd";
import ColumnTitle from "../ColumnTitle/ColumnTitle";
import Task from "../Task/Task";
import toast from "react-hot-toast";

const DragDrop = ({ status, tasks, setTasks, todos, onGoing, completed }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  const statusMappings = {
    todo: { text: "Todo", bg: "rgb(108, 117, 125)", tasksToMap: todos },
    onGoing: {
      text: "onGoing",
      bg: "rgb(156, 39, 176)",
      tasksToMap: onGoing,
    },
    completed: {
      text: "completed",
      bg: "rgb(40, 167, 69)",
      tasksToMap: completed,
    },
  };

  const { text, bg, tasksToMap } = statusMappings[status];
  const addItemToSection = (id) => {
    console.log("dropped", id, status);
    setTasks((prev) => {
      const updatedTasks = prev.map((task) =>
        task.id === id ? { ...task, status } : task
      );

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      toast("Task status has been changed");
      return updatedTasks;
    });
  };

  return (
    <>
      <div
        className={`w-96 ${isOver ? "bg-slate-200" : ""} mx-auto`}
        ref={drop}
      >
        <ColumnTitle text={text} bg={bg} />
        {tasksToMap.length > 0 &&
          tasksToMap.map((task) => (
            <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
          ))}
      </div>
    </>
  );
};
export default DragDrop;
