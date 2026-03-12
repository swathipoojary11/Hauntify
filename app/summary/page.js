"use client";

import { useTaskStore } from "../store/taskStore";

export default function Summary() {
  const tasks = useTaskStore((state) => state.tasks);

  const completed = tasks.filter((t) => t.completed);
  const pending = tasks.filter((t) => !t.completed);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 px-4">

      <h1 className="text-4xl font-extrabold text-pink-600 mb-10">
        Task Summary 🌸
      </h1>

      <div className="flex flex-col sm:flex-row gap-8">

        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center w-52 border border-pink-200 hover:scale-105 transition">

          <h2 className="text-xl font-bold text-pink-600 mb-3">
            Completed
          </h2>

          <p className="text-5xl font-extrabold text-pink-500">
            {completed.length}
          </p>

          <p className="text-gray-500 mt-2">
            Tasks finished
          </p>

        </div>

        <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center w-52 border border-rose-200 hover:scale-105 transition">

          <h2 className="text-xl font-bold text-rose-600 mb-3">
            Pending
          </h2>

          <p className="text-5xl font-extrabold text-rose-500">
            {pending.length}
          </p>

          <p className="text-gray-500 mt-2">
            Tasks remaining
          </p>

        </div>

      </div>

    </div>
  );
}