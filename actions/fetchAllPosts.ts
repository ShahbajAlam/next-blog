"use server";

import { connectDB } from "@/DB/connectDB";
import { Blog } from "@/models/blogs";

export default async function fetchAllPosts(page: number) {
    try {
        connectDB();
        const totalCount = await Blog.countDocuments({});
        const posts = await Blog.find({})
            .sort({ createdAt: -1 })
            .skip((page - 1) * 5)
            .limit(5);
        if (posts) return { totalCount, posts };
    } catch (error) {
        console.log(error);
    }
}
