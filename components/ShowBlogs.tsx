import Link from "next/link";
import { BlogProps } from "@/models/blogs";
import dateFormatter from "@/utils/dateFormatter";

export default function ShowBlogs(blog: BlogProps) {
    return (
        <Link href={blog._id} className="w-full p-4 rounded-lg bg-black/75">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl">{blog.title}</h1>
                <div className="flex gap-4">
                    <img
                        src={blog.authorImage}
                        alt="Author Image"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <p>{blog.authorName}</p>
                </div>
                <p>{dateFormatter(blog.createdAt)}</p>
            </div>
        </Link>
    );
}
