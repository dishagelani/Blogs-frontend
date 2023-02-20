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
        [{header: "1"}, {header: "2"}, {font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{color: []}][
            ({list: "ordered"},
            {list: "bullet"},
            {indent: "-1"},
            {indent: "+1"})
        ],
        ["link", "image", "video"],
        ["clean"],
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
    "indent",
    "link",
    "image",
    "video",
];
export default PostBlogs;
