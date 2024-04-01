import fetchPostById from "@/actions/fetchPostById";
import ShowSingleBlog from "@/components/ShowSingleBlog";
import { type BlogProps } from "@/models/blogs";

type Params = {
    params: {
        id: string;
    };
};

export default async function SingleBlogPage({ params: { id } }: Params) {
    const post = (await fetchPostById(id)) as BlogProps;

    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col justify-start items-center w-full">
            <ShowSingleBlog post={post} />
        </div>
    );
}
