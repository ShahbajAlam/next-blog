import { type BlogProps } from "@/models/blogs";
import fetchAllPosts from "@/actions/fetchAllPosts";
import PostContainer from "@/components/PostsContainer";

export default async function Home() {
    const allPosts = (await fetchAllPosts())?.posts as BlogProps[];

    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col items-center">
            <PostContainer posts={allPosts} />
        </div>
    );
}
