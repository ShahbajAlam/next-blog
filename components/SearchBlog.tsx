"use client";

import { type Dispatch, type SetStateAction } from "react";

export default function SearchBlog({
    searchValue,
    setSearchValue,
}: {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}) {
    return (
        <>
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
            </div>
        </>
    );
}
