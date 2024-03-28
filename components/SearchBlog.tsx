"use client";

import { useState } from "react";

import Spinner from "./Spinner";
import ShowBlogs from "./ShowBlogs";
import { BlogProps } from "@/models/blogs";
import { usePosts } from "@/providers/PostContext";

export default function SearchBlog() {
    const data = usePosts();
    const [searchValue, setSearchValue] = useState<string>("");

    const posts = data?.posts.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <>
            {data?.loading && <Spinner size={80} />}
            {!data?.loading && (
                <div className="w-full">
                    <div className="mb-6">
                        <input
                            type="text"
                            value={searchValue}
                            placeholder="Search blogs..."
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="input w-full input-bordered rounded-lg mt-3 focus:outline-0 placeholder:text-gray-950 dark:placeholder:text-gray-50"
                        />
                    </div>
                    <ShowBlogs posts={posts as BlogProps[]} />
                </div>
            )}
        </>
    );
}
