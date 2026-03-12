"use client";

import { useTaskStore } from "../store/taskStore";
import { useEffect, useRef } from "react";

export default function TaskList() {
  const {
    tasks,
    toggleTask,
    deleteTask,
    restoreTask,
    restoreGhost,
    lastDeleted,
  } = useTaskStore();

  const ghostSound = useRef(null);

  const hauntedTask = tasks.find((t) => t.haunted);
const playGhostSound = () => {

    const ghostSounds = [
      "https://actions.google.com/sounds/v1/horror/ghost.ogg",
      "https://actions.google.com/sounds/v1/horror/creaking_door.ogg",
      "https://actions.google.com/sounds/v1/horror/evil_laugh.ogg",
      "https://actions.google.com/sounds/v1/horror/scream.ogg",
      "https://actions.google.com/sounds/v1/horror/metal_squeak.ogg"
    ];

    const randomSound =
      ghostSounds[Math.floor(Math.random() * ghostSounds.length)];

    const audio = new Audio(randomSound);
    audio.volume = 1;
    audio.play().catch(() => {});
  };
  useEffect(() => {
    if (hauntedTask && ghostSound.current) {
      ghostSound.current.currentTime = 0;

      const playPromise = ghostSound.current.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [hauntedTask]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 py-16 px-4">

      {/* Ghost sound */}
      <audio ref={ghostSound}>
        <source src="/ghost.mp3" type="audio/mpeg" />
      </audio>

      <div className="max-w-xl mx-auto bg-black/70 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-purple-600">

        <h1 className="text-4xl font-extrabold text-purple-400 text-center mb-2">
          👻 Haunted Task Manager
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Some tasks refuse to die...
        </p>

        {lastDeleted && (
          <div className="mb-6 text-center">
            <button
              onClick={restoreTask}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Restore Deleted Task
            </button>
          </div>
        )}

        <div className="space-y-4">

          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex justify-between items-center p-4 rounded-xl shadow-sm transition
              ${
                task.haunted
                  ? "bg-purple-900 text-purple-200 border border-purple-500 animate-pulse"
                  : "bg-gray-900 border border-gray-700"
              }`}
            >

              <span
                className={`font-medium ${
                  task.completed
                    ? "line-through text-gray-500"
                    : task.haunted
                    ? "text-purple-200"
                    : "text-white"
                }`}
              >
                {task.text}
              </span>

              <div className="flex gap-2">

                {!task.haunted && (
                  <>
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-lg"
                    >
                      ✓
                    </button>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    >
                      ✕
                    </button>
                  </>
                )}

                {task.haunted && (
                  <button
                    onClick={() => restoreGhost(task.id)}
                    className="bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600"
                  >
                    Release Ghost
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}