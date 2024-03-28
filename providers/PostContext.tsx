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
    setPosts: Dispatch<SetStateAction<BlogProps[]>>;
} | null>(null);

const PostProvider = ({ children }: { children: ReactNode }) => {
    const [posts, setPosts] = useState<BlogProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getAllPosts = async () => {
            const data = (await fetchAllPosts()) as BlogProps[];
            setPosts(data);
            setLoading(false);
        };
        getAllPosts();
    }, []);

    return (
        <PostContext.Provider value={{ loading, posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
};

const usePosts = () => useContext(PostContext);

export { PostProvider, usePosts };
