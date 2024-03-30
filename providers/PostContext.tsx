"use client";

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { BlogProps } from "@/models/blogs";
import fetchAllPosts from "@/actions/fetchAllPosts";

const PostContext = createContext<{
    loading: boolean;
    posts: BlogProps[];
    page: number;
    totalCount: number;
    setPage: Dispatch<SetStateAction<number>>;
    setPosts: Dispatch<SetStateAction<BlogProps[]>>;
} | null>(null);

const PostProvider = ({ children }: { children: ReactNode }) => {
    const [page, setPage] = useState<number>(1);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [posts, setPosts] = useState<BlogProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getAllPosts = async () => {
            const data = await fetchAllPosts(page);
            setTotalCount(data?.totalCount as number);
            setPosts(data?.posts as BlogProps[]);
            setLoading(false);
        };
        getAllPosts();
    }, [page]);

    return (
        <PostContext.Provider
            value={{ loading, posts, totalCount, page, setPage, setPosts }}
        >
            {children}
        </PostContext.Provider>
    );
};

const usePosts = () => useContext(PostContext);

export { PostProvider, usePosts };
