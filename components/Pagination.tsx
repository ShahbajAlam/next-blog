"use client";

import { Dispatch, SetStateAction } from "react";

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
    const lastPage = Math.ceil(totalCount / 5);
    const handlePrevPage = () => {
        if (page === 1) return;
        setPage((e) => e - 1);
        if (typeof window !== "undefined")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    };

    const handleNextPage = () => {
        if (page === lastPage) return;
        setPage((e) => e + 1);
        if (typeof window !== "undefined")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    };

    return (
        <div className="join mb-3 mt-8">
            <button
                className="join-item btn disabled:cursor-not-allowed"
                onClick={handlePrevPage}
                disabled={page === 1}
            >
                «
            </button>
            <button className="join-item btn">Page {page}</button>
            <button
                className="join-item btn disabled:cursor-not-allowed"
                onClick={handleNextPage}
                disabled={page === lastPage}
            >
                »
            </button>
        </div>
    );
}
