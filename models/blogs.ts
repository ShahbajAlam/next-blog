import mongoose from "mongoose";

export type BlogProps = {
    _id?: any;
    title: string;
    content: string;
    createdAt?: any;
    authorID: string;
    updatedAt?: any;
    authorName: string;
    authorImage: string;
};

const BlogSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        authorID: String,
        authorName: String,
        authorImage: String,
    },
    { timestamps: true }
);

const Blog = mongoose.models?.blogs || mongoose.model("blogs", BlogSchema);

export { Blog };
