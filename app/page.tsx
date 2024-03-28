import ShowBlogs from "@/components/ShowBlogs";

export default async function Home() {
    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col items-center">
            <ShowBlogs />
        </div>
    );
}
