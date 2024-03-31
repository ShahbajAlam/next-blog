import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { BlogProps } from "@/models/blogs";
import fetchUserID from "@/actions/fetchUserID";
import ShowBlogs from "@/components/ShowBlogs";
import fetchUserPosts from "@/actions/fetchUserPosts";
import LogoutButton from "@/components/LogoutButton";

export default async function ProfilePage() {
    const session = await getServerSession();

    if (!session) redirect("/");

    const myID = await fetchUserID(
        session.user?.email as string,
        session.user?.image as string
    );
    const myPosts = (await fetchUserPosts(myID)) as BlogProps[];

    return (
        <div className="h-dvh px-4 pt-20 pb-4 flex flex-col justify-center items-center gap-5">
            <div className="basis-[85%] flex flex-col justify-start items-center w-full overflow-scroll pb-4">
                {myPosts.length === 0 ? (
                    <h1>You have not written any blog. Try writing some</h1>
                ) : (
                    <>
                        <h1 className="text-2xl mb-4">Your Blogs</h1>
                        <ShowBlogs posts={myPosts} />
                    </>
                )}
            </div>
            <div className="basis-[8%] flex justify-center items-center gap-3 w-full">
                <Link
                    href="/write"
                    className="w-full flex justify-center items-center px-4 py-2 rounded-xl gap-6 bg-[#0da021] font-bold text-xl dark:text-gray-50 hover:brightness-75"
                >
                    Write a blog
                </Link>
                <LogoutButton />
            </div>
        </div>
    );
}
