"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FetchUsers from "@/app/components/fetchUsers/FetchUsers";

type User = {
  id: number;
  username: string;
  email: string;
  created_at: any;
};

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);

  const router = useRouter();
  function handleRoute() {
    router.push("/");
  }

  useEffect(() => {
    async function getUsers() {
      const data = await FetchUsers();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-white">
      <nav className="w-full bg-gray-100 p-4 flex justify-between items-center">
        <button
          type="button"
          onClick={handleRoute}
          className="flex items-center justify-center p-4 text-lg bg-blue-500 text-white rounded w-[150px] h-[42px] mt-4 "
        >
          Home
        </button>
        navigation goes here
      </nav>
      <h1>Admin Page</h1>
      <div className="flex flex-col items-center justify-center w-1/2 h-[1000px] border-2 border-black rounded-2xl">
        <form className="w-full flex flex-col items-center">
          <input placeholder="Search" className="mb-4 p-2 border rounded" />
        </form>
        <table className="w-full mt-8 border">
          <thead>
            <tr>
              <th className="text-left p-2">Username</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Created @</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
