import PostContainer from "@/components/PostsContainer";

export default async function Home() {
    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col items-center">
            <PostContainer />
        </div>
    );
}
