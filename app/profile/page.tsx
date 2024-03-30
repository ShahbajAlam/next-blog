import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import LogoutButton from "@/components/LogoutButton";
import fetchUserPosts from "@/actions/fetchUserPosts";
import fetchUserID from "@/actions/fetchUserID";
import { BlogProps } from "@/models/blogs";

export default async function ProfilePage() {
    const session = await getServerSession();

    if (!session) redirect("/");

    const myID = await fetchUserID(
        session.user?.email as string,
        session.user?.image as string
    );
    const myPosts = (await fetchUserPosts(myID)) as BlogProps[];

    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl">Hi {session.user?.name}</h1>
            {myPosts.map((item) => (
                <h1>{item.title}</h1>
            ))}
            <LogoutButton />
        </div>
    );
}
