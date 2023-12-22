import { useEffect, useState } from "react";
import DragDrop from "../DragDrop/DragDrop";

const ListTasks = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const filterTasksByStatus = (status) =>
      tasks.filter((task) => task.status === status);
    setTodos(filterTasksByStatus("todo"));
    setOnGoing(filterTasksByStatus("onGoing"));
    setCompleted(filterTasksByStatus("completed"));
  }, [tasks]);

  const statuses = ["todo", "onGoing", "completed"];

  return (
    <div className="flex gap-16">
      {statuses.map((status, index) => (
        <DragDrop
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          onGoing={onGoing}
          completed={completed}
        />
      ))}
    </div>
  );
};

export default ListTasks;
