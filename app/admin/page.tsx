"use client";
import { useState, useEffect } from "react";
import FetchUsers from "@/app/components/fetchUsers/FetchUsers";
import Link from "next/link";

type User = {
  id: number;
  username: string;
  email: string;
  created_at: any;
};

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);


  useEffect(() => {
    async function getUsers() {
      const data = await FetchUsers();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-neutral-100">
      <nav className="w-full bg-gray-500 p-4 flex justify-between items-center h-[50px]">
        <Link href="/">Home</Link>
      </nav>
      <h1 className="mt-32">Admin Page</h1>
      <div className="flex flex-col items-center justify-center w-[1000px] h-[700px] border-4 border-black rounded-2xl mt-4">
        <form className="w-full flex flex-col items-center">
          <input placeholder="Search" className="mb-4 p-2 border rounded" />
        </form>
        <table className="w-full mt-8 border bg-neutral-200">
          <thead>
            <tr>
              <th className="text-left p-2">Username</th>
              <th className="text-left p-2">Email</th>
              <th className="text-left p-2">Created @</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-white">
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
