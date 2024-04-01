"use server";

import { Blog, BlogProps } from "@/models/blogs";

export default async function (id: string) {
    try {
        const post = (await Blog.findById(id)) as BlogProps;
        if (post) return post;
    } catch (error) {
        console.log(error);
    }
}
