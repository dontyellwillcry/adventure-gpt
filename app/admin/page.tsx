"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center w-96 h-96 border-2 border-black rounded-2xl">
        <form>
          <h1>Admin Page</h1>
          <input placeholder="Search" className="mb-4 p-2 border rounded" />
        </form>
      </div>
    </main>
  );
}
