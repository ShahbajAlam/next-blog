"use server";

import { Blog } from "@/models/blogs";
import { connectDB } from "@/DB/connectDB";

export default async function fetchAllPosts() {
    try {
        connectDB();
        const totalCount = await Blog.countDocuments({});
        const posts = await Blog.find({}).sort({ createdAt: -1 });
        if (posts) return { posts, totalCount };
    } catch (error) {
        console.log(error);
    }
}
