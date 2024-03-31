"use client";

import { ReactNode, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useSession } from "next-auth/react";

import WriteBlog from "./Editor";
import addPost from "@/actions/addPost";
import showToast from "@/utils/showToast";
import { BlogProps } from "@/models/blogs";
import fetchUserID from "@/actions/fetchUserID";
import { usePosts } from "@/providers/PostContext";

export default function WritePost() {
    const session = useSession();
    const { setPosts } = usePosts();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const resetForm = () => {
        setTitle("");
        setContent("");
    };

    const handleForm = async () => {
        if (!title || !content) {
            showToast("error", "Both fields are required");
            return;
        }

        try {
            const userID = await fetchUserID(
                session.data?.user?.email as string,
                session.data?.user?.image as string
            );

            if (!userID) throw new Error("Could not post the blog");

            const blog: BlogProps = {
                title,
                content,
                authorID: userID,
                authorName: session.data?.user?.name as string,
                authorImage: session.data?.user?.image as string,
            };

            const addedBlog = await addPost(blog);
            setPosts((e) => [addedBlog, ...e]);

            if (addedBlog) {
                showToast("success", "Blog is posted successfully");
                resetForm();
            } else {
                showToast("error", "Could not post the blog");
            }
        } catch (err) {
            if (err instanceof Error) showToast("error", err.message);
        }
    };

    return (
        <WriteBlog
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
            handleForm={handleForm}
        />
    );
}
