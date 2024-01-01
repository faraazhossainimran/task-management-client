import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import useAuth from "../../hooks/useAuth";
const CreateTasks = ({ tasks, setTasks }) => {
  const { user } = useAuth();
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo", // can also be inprogress or closed
  });
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // Access the updated task data from the form submission
    console.log("form submit", data);
    const { title, priority, description } = data;

    if (title.length < 3)
      return toast.error("A task' title must have more than 3 characters");
    if (title.length > 30)
      return toast.error("A task's title must have less than 30 characters");
    if (description.length > 150)
      return toast.error(
        "A task's description must have less than 150 characters"
      );
    setTasks((prev) => {
      const newTask = {
        id: uuidv4(),
        name: title,
        status: "todo", // Set initial status here
        priority,
        description,
      };
      const updatedTasks = [...prev, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });

    reset();
    toast.success("Task Created");
  };
  console.log(task.name);
  return (
    <div>
      {/* modal start */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className="text-center mb-4">
        <h1 className="text-3xl">Hello, {user && user?.displayName || user?.email || "User"}</h1>
      </div>
      <div className="">
      <button
        className=" mt-4 w-full justify-center text-2xl"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <p>Create a Task</p>
      </button>
      </div>
      <dialog  id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex">
                <div>
                  <input
                    {...register("title")}
                    // value={task.name}
                    onChange={(e) =>
                      setTask({ ...task, id: uuidv4(), name: e.target.value })
                    }
                    type="text"
                    placeholder="Task Title"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="ml-4">
                  <select
                    {...register("priority")}
                    className="select w-full border-gray-300 max-w-xs"
                  >
                    <option disabled selected>
                      Set Priority
                    </option>
                    <option>Low</option>
                    <option>Modarate</option>
                    <option>High</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  {...register("description")}
                  className="textarea textarea-bordered"
                  placeholder="Bio"
                ></textarea>
              </div>
              <button
                onClick={() => {
                  const modal = document.getElementById("my_modal_5");
                  if (modal) {
                    modal.close();
                  }
                }}
                className="mt-4 btn w-full flex justify-center items-center"
              >
                Create Tasks
              </button>
            </form>
          </div>
          <div className=" mt-4 w-full flex justify-center items-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* modal ends */}
    </div>
  );
};

export default CreateTasks;
