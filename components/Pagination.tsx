"use client";

import { type Dispatch, type SetStateAction } from "react";
import { POSTS_PER_PAGE } from "./PostsContainer";

type PaginationProps = {
    page: number;
    totalCount: number;
    setPage: Dispatch<SetStateAction<number>>;
};

export default function Pagination({
    page,
    totalCount,
    setPage,
}: PaginationProps) {
    const lastPage = Math.ceil(totalCount / POSTS_PER_PAGE);

    const scrollToTop = () => {
        if (typeof window !== "undefined")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    };

    const handlePrevPage = () => {
        scrollToTop();
        if (page === 1) return;
        setPage((e) => e - 1);
    };

    const handleNextPage = () => {
        scrollToTop();
        if (page === lastPage) return;
        setPage((e) => e + 1);
    };

    return (
        <div className="join mb-3 mt-8">
            <button
                className="join-item btn px-8 disabled:cursor-not-allowed"
                onClick={handlePrevPage}
                disabled={page === 1}
            >
                «
            </button>
            <button className="join-item btn">Page {page}</button>
            <button
                className="join-item btn px-8 disabled:cursor-not-allowed"
                onClick={handleNextPage}
                disabled={page === lastPage}
            >
                »
            </button>
        </div>
    );
}
