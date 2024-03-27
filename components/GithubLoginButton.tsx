"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export default function GithubLoginButton() {
    return (
        <button
            onClick={() => signIn("github")}
            className="w-full flex justify-center items-center px-4 py-2 rounded-xl gap-6 bg-[#f5f5f5] font-bold text-xl dark:text-gray-900 hover:brightness-75"
        >
            <Image
                src="/github.svg"
                width={24}
                height={24}
                alt="GitHub Button"
            />
            <p>Log in with GitHub</p>
        </button>
    );
}
