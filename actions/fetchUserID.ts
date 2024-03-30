"use server";

import { User } from "@/models/users";
import { connectDB } from "@/DB/connectDB";

export default async function fetchUserID(email: string, image: string) {
    try {
        connectDB();
        const userID = await User.find({ email, image }).select("_id");
        if (userID) return userID[0]?._id;
    } catch (error) {
        console.log(error);
    }
}
