import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  lastDeleted: null,

  addTask: (text) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          text,
          originalText: text,
          completed: false,
          haunted: false,
        },
      ],
    })),

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),

  deleteTask: (id) =>
    set((state) => {
      const ghostMessages = [
        "👻 I'm back!",
        "You can't escape me!",
        "Nice try deleting me 😈",
        "Did you really think I was gone?",
        "I live here now 👻",
        "This task refuses to die.",
        "Deleting me won't solve your problems.",
        "You can't delete your destiny.",
        "I will haunt your productivity forever.",
        "This task has unfinished business.",
        "You thought it was that easy?",
        "Ghost mode activated 👻",
        "Nice try, human.",
        "Your task is evolving...",
        "I refuse to leave.",
        "I came back from the dead.",
        "Task.exe has stopped responding.",
        "You unlocked the haunted feature.",
        "This task is now cursed.",
        "You awakened the ghost task.",
      ];

      const randomMessage =
        ghostMessages[Math.floor(Math.random() * ghostMessages.length)];

      const isHaunted = Math.random() < 0.5;

      if (isHaunted) {
        return {
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  text: randomMessage,
                  haunted: true,
                }
              : task
          ),
        };
      }

      const deleted = state.tasks.find((t) => t.id === id);

      return {
        tasks: state.tasks.filter((task) => task.id !== id),
        lastDeleted: deleted,
      };
    }),

  restoreTask: () =>
    set((state) => {
      if (!state.lastDeleted) return {};
      return {
        tasks: [...state.tasks, state.lastDeleted],
        lastDeleted: null,
      };
    }),

  restoreGhost: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: task.originalText,
              haunted: false,
            }
          : task
      ),
    })),
}));