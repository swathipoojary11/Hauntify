"use client";



import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white p-4 flex justify-center items-center gap-8 shadow-lg sticky top-0 z-50">

      <Link 
        href="/" 
        className="font-semibold px-4 py-2 rounded-lg hover:bg-white/20 transition"
      >
        Add Task
      </Link>

      <Link 
        href="/task-list" 
        className="font-semibold px-4 py-2 rounded-lg hover:bg-white/20 transition"
      >
        Task List
      </Link>

      <Link 
        href="/summary" 
        className="font-semibold px-4 py-2 rounded-lg hover:bg-white/20 transition"
      >
        Summary
      </Link>

    </div>
  );
}