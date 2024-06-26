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

type ContextProps = {
    page: number;
    loading: boolean;
    posts: BlogProps[];
    totalCount: number;
    setPage: Dispatch<SetStateAction<number>>;
};

const initialValue: ContextProps = {
    loading: true,
    page: 1,
    posts: [],
    totalCount: 0,
    setPage: () => {},
};

const PostContext = createContext<ContextProps>(initialValue);

const PostProvider = ({ children }: { children: ReactNode }) => {
    const [totalCount, setTotalCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [posts, setPosts] = useState<BlogProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const data = await fetchAllPosts();
            setPosts(data?.posts as BlogProps[]);
            setTotalCount(data?.totalCount as number);
            setLoading(false);
        })();
    }, []);

    return (
        <PostContext.Provider
            value={{ loading, posts, totalCount, page, setPage }}
        >
            {children}
        </PostContext.Provider>
    );
};

const usePosts = () => useContext(PostContext);

export { PostProvider, usePosts };
