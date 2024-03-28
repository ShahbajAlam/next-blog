"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import addPost from "@/actions/addPost";
import showToast from "@/utils/showToast";
import { BlogProps } from "@/models/blogs";
import fetchUserID from "@/actions/fetchUserID";
import { formats, modules } from "@/utils/editorData";
import { usePosts } from "@/providers/PostContext";

export default function Editor() {
    const data = usePosts();
    const router = useRouter();
    const session = useSession();
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
                session.data?.user?.email as string
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
            data?.setPosts((e) => [...e, addedBlog]);

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
        <form action={handleForm} className="w-full flex flex-col gap-6">
            <div>
                <label htmlFor="title" className="text-xl">
                    Title of your blog
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input w-full input-bordered rounded-none border-gray-200 mt-3 focus:outline-0"
                />
            </div>
            <label className="text-xl">Content of the blog</label>
            <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                placeholder="Start writing your blog..."
                className="mt-3"
            />
            <button type="submit">Post</button>
        </form>
    );
}
