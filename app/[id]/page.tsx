import { BlogProps } from "@/models/blogs";
import fetchSinglePost from "@/actions/fetchSinglePost";

type Params = {
    params: {
        id: string;
    };
};

export default async function SingleBlogPage({ params: { id } }: Params) {
    const post: BlogProps = await fetchSinglePost(id);
    console.log(post);
    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col justify-center items-center">
            <h1>{post.title}</h1>
        </div>
    );
}
