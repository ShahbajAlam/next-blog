import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { options } from "../api/auth/[...nextauth]/options";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import GithubLoginButton from "@/components/GithubLoginButton";

export default async function LoginPage() {
    const session = await getServerSession(options);

    if (session) redirect("/profile");

    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex justify-center items-center">
            <div className="w-full rounded-2xl px-4 py-10 flex flex-col items-center gap-4">
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Welcome to NextBlog
                </h1>
                <GoogleLoginButton />
                <GithubLoginButton />
            </div>
        </div>
    );
}
