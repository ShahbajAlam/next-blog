const modules = {
    toolbar: {
        container: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, false] }],
            ["bold", "italic", "underline", "blockquote"],
            [{ color: [] }],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            [{ script: "sub" }, { script: "super" }],
            ["link", "clean"],
            ["code-block"],
        ],
    },
    clipboard: {
        matchVisual: true,
    },
};

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "script",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "color",
    "clean",
    "code-block",
];

export { modules, formats };
