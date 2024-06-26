import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import WritePost from "@/components/WritePost";

export default async function WriteBlogPage() {
    const session = await getServerSession();

    if (!session) redirect("/");

    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col justify-center items-center">
            <WritePost />
        </div>
    );
}
