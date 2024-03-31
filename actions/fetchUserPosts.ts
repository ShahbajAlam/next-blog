"use server";

import { Blog } from "@/models/blogs";
import { connectDB } from "@/DB/connectDB";

export default async function fetchUserPosts(authorID: string) {
    try {
        connectDB();
        const posts = await Blog.find({ authorID }).sort({ createdAt: -1 });
        if (posts) return posts;
    } catch (error) {
        console.log(error);
    }
}
