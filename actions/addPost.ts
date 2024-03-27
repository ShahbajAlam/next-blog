"use server";

import { connectDB } from "@/DB/connectDB";
import { Blog, BlogProps } from "@/models/blogs";

export default async function addPost(blog: BlogProps) {
    try {
        connectDB();
        const addedBlog = await Blog.create({ ...blog });
        if (addedBlog) return addedBlog;
    } catch (error) {
        console.log(error);
    }
}
