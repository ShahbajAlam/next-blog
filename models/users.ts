import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        image: String,
    },
    { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", UserSchema);

export { User };
