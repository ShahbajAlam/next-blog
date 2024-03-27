import Editor from "@/components/Editor";

export default async function WriteBlogPage() {
    return (
        <div className="min-h-dvh px-4 pt-20 pb-4 flex flex-col justify-center items-center">
            <h1>Write Blog</h1>
            <Editor />
        </div>
    );
}
