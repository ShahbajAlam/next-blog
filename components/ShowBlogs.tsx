import Link from "next/link";
import { motion } from "framer-motion";

import { BlogProps } from "@/models/blogs";
import dateFormatter from "@/utils/dateFormatter";

export default function ShowBlogs({ posts }: { posts: BlogProps[] }) {
    return (
        <div className="w-full flex flex-col gap-5">
            {posts.map((post) => (
                <Link
                    key={post._id}
                    href={post._id}
                    className="w-full p-4 rounded-xl shadow-2xl bg-gray-100 dark:bg-black/85"
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
                        <p>Posted on - {dateFormatter(post.createdAt)}</p>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
