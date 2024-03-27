import { BlogProps } from "@/models/blogs";
import fetchAllPosts from "@/actions/fetchAllPosts";
import ShowBlogs from "@/components/ShowBlogs";

export default async function Home() {
    const posts = (await fetchAllPosts()) as BlogProps[];

    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col justify-center items-center">
            <h1>Home Page</h1>
            {posts?.map((post: BlogProps) => (
                <ShowBlogs
                    _id={post._id.toString()}
                    key={post._id.toString()}
                    title={post.title}
                    content={post.content}
                    createdAt={post.createdAt}
                    updatedAt={post.updatedAt}
                    authorID={post.authorID}
                    authorName={post.authorName}
                    authorImage={post.authorImage}
                />
            ))}
        </div>
    );
}
