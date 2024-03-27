"use server";

import { Blog } from "@/models/blogs";
import { connectDB } from "@/DB/connectDB";

export default async function fetchSinglePost(id: string) {
    try {
        connectDB();
        const post = await Blog.findById(id);
        if (post) return post;
    } catch (error) {
        console.log(error);
    }
}
