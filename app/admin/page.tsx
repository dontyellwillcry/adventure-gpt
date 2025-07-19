"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  function handleRoute() {
    router.push("/");
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen \-white">
      <h1>Admin Page</h1>
      <div className="flex flex-col items-center justify-center w-1/2 h-[1000px] border-2 border-black rounded-2xl">
        <form className="w-full flex flex-col items-center">
          <input placeholder="Search" className="mb-4 p-2 border rounded" />
          <button
            type="button"
            onClick={handleRoute}
            className="flex items-center justify-center p-4 text-lg bg-blue-500 text-white rounded w-[150px] h-[42px] mt-4 "
          >
            Home
          </button>
        </form>
      </div>
    </main>
  );
}
