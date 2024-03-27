"use server";

import { connectDB } from "@/DB/connectDB";
import { Blog } from "@/models/blogs";
import { revalidatePath } from "next/cache";

export default async function fetchAllPosts() {
    try {
        connectDB();
        const posts = await Blog.find({});
        if (posts) {
            return posts;
        }
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/");
}
