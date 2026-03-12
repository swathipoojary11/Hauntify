"use client";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useTaskStore } from "./store/taskStore";

export default function AddTask() {
  
  const [task, setTask] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleAdd = () => {
    if (!task) return;
    addTask(task);
    setTask("");
  };

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200">
<Navbar/>
      <h1 className="text-4xl font-extrabold text-pink-700 mb-8 tracking-wide drop-shadow-sm">
         Add Your Task
      </h1>

      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-96 border border-pink-200 transition-all duration-300 hover:shadow-pink-300">

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 outline-none p-3 w-full rounded-lg mb-5 transition-all duration-200"
        />

        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-full p-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:from-pink-600 hover:to-rose-600 transition-all duration-200"
        >
          Add Task
        </button>

      </div>

    </div>
  );
}