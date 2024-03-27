"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button
            onClick={() => signOut()}
            className="w-full flex justify-center items-center px-4 py-2 rounded-xl gap-6 bg-[#da4040] font-bold text-xl dark:text-gray-50 hover:brightness-75"
        >
            Log out
        </button>
    );
}
