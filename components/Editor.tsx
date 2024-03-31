import { type Dispatch, type SetStateAction } from "react";

import ReactQuill from "react-quill";
import { formats, modules } from "@/utils/editorData";

type EditorProps = {
    title: string;
    content: string;
    setTitle: Dispatch<SetStateAction<string>>;
    setContent: Dispatch<SetStateAction<string>>;
    handleForm: () => void;
};

export default function Editor(props: EditorProps) {
    return (
        <form action={props.handleForm} className="w-full flex flex-col gap-6">
            <div>
                <label htmlFor="title" className="text-xl">
                    Title of your blog
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={props.title}
                    onChange={(e) => props.setTitle(e.target.value)}
                    className="input w-full input-bordered rounded-none border-gray-200 mt-3 focus:outline-0"
                />
            </div>
            <label className="text-xl">Content of the blog</label>
            <ReactQuill
                theme="snow"
                value={props.content}
                onChange={props.setContent}
                modules={modules}
                formats={formats}
                placeholder="Start writing your blog..."
                className="mt-3"
            />
            <button type="submit">Post</button>
        </form>
    );
}
