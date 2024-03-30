"use client";

import { useState } from "react";

import Spinner from "./Spinner";
import Pagination from "./Pagination";
import ShowBlogs from "./ShowBlogs";
import SearchBlog from "./SearchBlog";
import { usePosts } from "@/providers/PostContext";

const POSTS_PER_PAGE = 5;

export default function PostContainer() {
    const [searchValue, setSearchValue] = useState<string>("");
    const { posts, page, loading, setPage, totalCount } = usePosts();

    const filteredPosts = posts.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const postsToBeShown = posts.slice(
        (page - 1) * POSTS_PER_PAGE,
        POSTS_PER_PAGE * page
    );

    if (loading) return <Spinner size={60} />;

    return (
        <>
            <SearchBlog
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            {searchValue && <ShowBlogs posts={filteredPosts} />}
            {!searchValue && (
                <>
                    <ShowBlogs posts={postsToBeShown} />
                    <Pagination
                        page={page}
                        setPage={setPage}
                        totalCount={totalCount}
                    />
                </>
            )}
        </>
    );
}
