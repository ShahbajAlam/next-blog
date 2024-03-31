"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Spinner from "./Spinner";
import { type BlogProps } from "@/models/blogs";
import dateFormatter from "@/utils/dateFormatter";
import { usePosts } from "@/providers/PostContext";

export default function ShowBlogs({ posts }: { posts: BlogProps[] }) {
    const { loading } = usePosts();

    return (
        <>
            {loading && <Spinner size={50} />}
            {!loading && posts.length === 0 && (
                <h1 className="text-2xl">No blog found</h1>
            )}
            {!loading && (
                <div className="w-full flex flex-col gap-5">
                    {posts.map((post) => (
                        <Link
                            key={post._id}
                            href={post._id}
                            className="w-full p-4 rounded-xl shadow-lg bg-gray-100 dark:bg-black/85"
                        >
                            <motion.div
                                className="flex flex-col gap-4"
                                initial={{
                                    y: 20,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                            >
                                <h1 className="text-2xl">{post.title}</h1>
                                <p>Posted by - {post.authorName}</p>
                                <p>
                                    Posted on - {dateFormatter(post.createdAt)}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
