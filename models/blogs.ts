import mongoose from "mongoose";

export type BlogProps = {
    _id?: any;
    createdAt?: any;
    updatedAt?: any;

    title: string;
    content: string;
    authorID: string;
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

const Blog = mongoose.models.blogs || mongoose.model("blogs", BlogSchema);

export { Blog };
