"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export default function GoogleLoginButton() {
    return (
        <button
            onClick={() => signIn("google")}
            className="w-full flex justify-center items-center px-4 py-2 rounded-xl gap-6 bg-[#46b363] font-bold text-xl dark:text-gray-50 hover:brightness-75"
        >
            <Image
                src="/google.svg"
                width={24}
                height={24}
                alt="Google Button"
            />
            <p>Log in with Google</p>
        </button>
    );
}
