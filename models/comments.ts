import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        authorID: String,
        authorName: String,
        comment: String,
    },
    { timestamps: true }
);

const Comment =
    mongoose.models.comments || mongoose.model("comments", CommentSchema);

export { Comment };
