import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {
            dbName: "next-blog",
        });
        const connection = mongoose.connection;

        connection.on("connected", () => console.log("DB is connected"));

        connection.on("error", () => {
            console.log("DB is not connected");
            process.exit();
        });
    } catch (error) {
        console.log(error);
    }
};

export { connectDB };
