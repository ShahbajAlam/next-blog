import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

export default async function ProfilePage() {
    const session = await getServerSession();

    if (!session) redirect("/");

    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col justify-center items-center">
            <h1 className="text-3xl">My Profile</h1>
            <Link href="/profile/write">Write Post</Link>
            <LogoutButton />
        </div>
    );
}
