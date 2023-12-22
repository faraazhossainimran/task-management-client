import axiosSecure from ".";

// Fetch all tasks from db
export const getAllTasks = async () => {
  const { data } = await axiosSecure("/tasks");
  return data;
};

// post a task
export const addTasks = async taskData => {
    const {data} = await axiosSecure.post("tasks", taskData)
    return data;
}