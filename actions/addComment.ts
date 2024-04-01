"use server";

import { Comment } from "@/models/comments";

export default async function addComment(
    formData: FormData,
    authorID: string,
    authorName: string
) {
    const comment = formData.get("comment");
    try {
        await Comment.create({ comment, authorID, authorName });
    } catch (error) {
        console.log(error);
    }
}
