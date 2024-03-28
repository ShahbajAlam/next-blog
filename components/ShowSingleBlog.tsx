"use client";

import { BlogProps } from "@/models/blogs";
import { usePosts } from "@/providers/PostContext";
import Spinner from "./Spinner";

export default function ShowSingleBlog({ id }: { id: string }) {
    const data = usePosts();
    const post = data?.posts.filter((item) => item._id === id)[0] as BlogProps;

    return (
        <>
            {data?.loading && <Spinner size={80} />}
            {!data?.loading && (
                <div>
                    <h1 className="text-3xl">{post.title}</h1>
                </div>
            )}
        </>
    );
}
