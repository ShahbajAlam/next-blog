import { BlogProps } from "@/models/blogs";
import fetchSinglePost from "@/actions/fetchSinglePost";
import ShowSingleBlog from "@/components/ShowSingleBlog";

type Params = {
    params: {
        id: string;
    };
};

export default async function SingleBlogPage({ params: { id } }: Params) {
    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col justify-center items-center">
            <ShowSingleBlog id={id} />
        </div>
    );
}
