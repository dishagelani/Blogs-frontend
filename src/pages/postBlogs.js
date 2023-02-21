import {Button} from "@mui/material";
import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostBlogs = () => {
    const [state, setState] = useState({editorHtml: ""});
    const handleChange = (html) => {
        setState({...state, editorHtml: html});
    };
    return (
        <div>
            <div className="outer-text-editor">
                <ReactQuill
                    theme={"snow"}
                    onChange={handleChange}
                    value={state.editorHtml}
                    modules={PostBlogs.modules}
                    formats={PostBlogs.formats}
                    bounds={".app"}
                />
                <Button onClick={() => console.log(state.editorHtml)}>
                    {" "}
                    Submit
                </Button>
            </div>
        </div>
    );
};
PostBlogs.modules = {
    toolbar: [
        // [{header: 1}, {header: 2}],
        [{size: ["small", false, "large", "huge"]}], // custom dropdown
        [{header: [1, 2, 3, 4, 5, 6, false]}],
        [{font: []}],
        ["bold", "italic", "underline", "strike", {color: []}],
        ["blockquote", "code-block"],
        [{list: "ordered"}, {list: "bullet"}],
        [{script: "sub"}, {script: "super"}], // superscript/subscript
        [{indent: "-1"}, {indent: "+1"}], // outdent/indent
        [{align: []}],
    ],

    clipboard: {
        matchVisual: false,
    },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
PostBlogs.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "script",
    "color",
    "indent",
    "align",
    "link",
    "image",
    "video",
];
export default PostBlogs;
