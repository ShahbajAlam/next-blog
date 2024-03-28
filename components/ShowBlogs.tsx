"use client";

import Link from "next/link";
import { BlogProps } from "@/models/blogs";
import dateFormatter from "@/utils/dateFormatter";
import { usePosts } from "@/providers/PostContext";

export default function ShowBlogs() {
    const data = usePosts();

    return (
        <div>
            {data?.loading && <h1>Loading....</h1>}
            {!data?.loading && data?.posts.map((e) => <h1 key={e._id}>{e.title}</h1>)}
        </div>
    );

    // return (
    //     <Link href={blog._id} className="w-full p-4 rounded-lg bg-black/75">
    //         <div className="flex flex-col gap-4">
    //             <h1 className="text-3xl">{blog.title}</h1>
    //             <div className="flex gap-4">
    //                 <img
    //                     src={blog.authorImage}
    //                     alt="Author Image"
    //                     width={32}
    //                     height={32}
    //                     className="rounded-full"
    //                 />
    //                 <p>{blog.authorName}</p>
    //             </div>
    //             <p>{dateFormatter(blog.createdAt)}</p>
    //         </div>
    //     </Link>
    // );
}
