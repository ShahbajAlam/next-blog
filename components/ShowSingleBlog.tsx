"use client";

import { usePosts } from "@/providers/PostContext";
import Spinner from "./Spinner";
import { type BlogProps } from "@/models/blogs";
import parseHTML from "@/utils/parseHTML";
import CommentForm from "./CommentForm";

export default function ShowSingleBlog({ post }: { post: BlogProps }) {
    const { loading } = usePosts();

    return (
        <>
            {loading && <Spinner size={80} />}
            {!loading && (
                <div className="w-full overflow-x-scroll">
                    <div className="my-4">
                        <h1 className="text-2xl">{post.title}</h1>
                        <p>Posted By - {post.authorName}</p>
                    </div>

                    <div className="divider divider-success" />

                    <div className="my-4">
                        <p>{parseHTML(post.content)}</p>
                    </div>

                    <div className="divider divider-success" />

                    <CommentForm
                        authorID={post.authorID}
                        authorName={post.authorName}
                    />
                </div>
            )}
        </>
    );
}
