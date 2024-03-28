"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Spinner from "./Spinner";
import dateFormatter from "@/utils/dateFormatter";
import { usePosts } from "@/providers/PostContext";

export default function ShowBlogs() {
    const data = usePosts();

    return (
        <>
            {data?.loading && <Spinner size={80} />}
            <div className="w-full flex flex-col gap-5">
                {!data?.loading &&
                    data?.posts.map((post) => (
                        <Link
                            key={post._id}
                            href={post._id}
                            className="w-full p-4 rounded-xl shadow-2xl bg-gray-100 dark:bg-gray-950"
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
        </>
    );
}
