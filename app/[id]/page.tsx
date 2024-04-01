import ShowSingleBlog from "@/components/ShowSingleBlog";

type Params = {
    params: {
        id: string;
    };
};

export default async function SingleBlogPage({ params: { id } }: Params) {
    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col justify-start items-center w-full">
            <ShowSingleBlog id={id} />
        </div>
    );
}
