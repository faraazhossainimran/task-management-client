import React, { useEffect, useState } from "react";
import CreateTasks from "../../../components/CreateTasks/CreateTasks";
import ListTasks from "../../../components/ListTasks/ListTasks";
import toast, { Toaster } from "react-hot-toast";
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  console.log("tasks", tasks);
  useEffect(() => {
    // Get tasks from localStorage or use an empty array if undefined
    const storedTasks = localStorage.getItem("tasks") || "[]";
    console.log("storedTasks", storedTasks);
    try {
      // Parse the JSON data
      const parsedTasks = JSON.parse(storedTasks);
  
      // Check if parsedTasks is an array
      if (Array.isArray(parsedTasks)) {
        setTasks(parsedTasks);
      } else {
        // Handle the case where the stored data is not an array
        console.error("Stored tasks is not an array:", parsedTasks);
      }
    } catch (error) {
      // Handle JSON parsing errors
      console.error("Error parsing stored tasks:", error);
    }
  }, []);
  
  return (
    <>
      <Toaster />
      <div className="container mx-auto">
        <div className="my-8">
          <CreateTasks tasks={tasks} setTasks={setTasks}></CreateTasks>
        </div>
        <div className="py-24">
          <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
