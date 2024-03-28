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
    posts: BlogProps[];
    setPosts: Dispatch<SetStateAction<BlogProps[]>>;
} | null>(null);

const PostProvider = async ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<BlogProps[]>([]);

    useEffect(() => {
        const getAllPosts = async () => {
            const data = (await fetchAllPosts()) as BlogProps[];
            setPosts(data);
        };
        getAllPosts();
    }, []);

    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
};

const usePosts = () => useContext(PostContext);

export { PostProvider, usePosts };
