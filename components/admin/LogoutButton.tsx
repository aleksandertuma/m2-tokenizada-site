// components/admin/LogoutButton.tsx
"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "m2-email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "m2-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Sair
    </button>
  );
}
