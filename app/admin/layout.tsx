// app/admin/layout.tsx

import { ReactNode } from "react";
import Link from "next/link";
import { LogoutButton } from "@/components/admin/LogoutButton";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Painel M2</h2>
        <nav className="flex flex-col space-y-2">
          <Link href="/admin/dashboard" className="text-emerald-700 hover:underline">
            Dashboard
          </Link>
          <Link href="/admin/repasses" className="text-emerald-700 hover:underline">
            Repasses
          </Link>
        </nav>
        <div className="pt-10">
          <LogoutButton />
        </div>
      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
