import addComment from "@/actions/addComment";

type CommentProps = {
    authorID: string;
    authorName: string;
};

export default function CommentForm({ authorID, authorName }: CommentProps) {
    return (
        <form
            action={(formData) => addComment(formData, authorID, authorName)}
            className="w-full flex flex-col gap-2"
        >
            <input
                type="text"
                id="comment"
                name="comment"
                className="input w-full input-bordered rounded-none border-gray-200 mt-3 focus:outline-0"
            />
            <button
                type="submit"
                className="px-8 self-end py-2 rounded-xl gap-6 bg-[#0da021] font-bold text-xl dark:text-gray-50 hover:brightness-75"
            >
                ADD
            </button>
        </form>
    );
}
