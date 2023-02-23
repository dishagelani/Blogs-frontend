import {Button} from "@mui/material";
import React, {useMemo, useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
const PostBlogs = () => {
    const [editorHtml, seteditorHtml] = useState("");
    const handleChange = useMemo(
        (html) => {
            console.log(html);
            seteditorHtml(html);
        },
        [editorHtml]
    );
    var quillObj;

    const imageHandler = () => {
        const input = document.createElement("input");

        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            var file = input.files[0];
            var formData = new FormData();

            formData.append("blog_images", file);

            var fileName = file.name;

            const res = await uploadFiles(formData, fileName, quillObj);
        };
    };
    const uploadFiles = (uploadFileObj, filename, quillObj) => {
        console.log("uploadFileObj", uploadFileObj);
        var apiUrl = "http://localhost:8000/uploadBlogImages";
        try {
            if (uploadFileObj != "") {
                axios
                    .post(apiUrl, uploadFileObj)
                    .then((response) => {
                        console.log(response, "response");
                        const range = quillObj.getEditorSelection();
                        console.log("range", range);
                        quillObj
                            .getEditor()
                            .insertEmbed(
                                range.index,
                                "image",
                                response.data.generatedImageLink
                            );
                    })
                    .catch((error) => console.log(error));
            }
        } catch (error) {
            console.log("uploadFiles : " + error);
        }
    };
    return (
        <div>
            <div className="outer-text-editor">
                <ReactQuill
                    ref={(el) => {
                        quillObj = el;
                    }}
                    theme={"snow"}
                    onChange={handleChange}
                    value={editorHtml}
                    // modules={PostBlogs.modules}
                    modules={{
                        toolbar: {
                            container: [
                                // [{header: 1}, {header: 2}],
                                [{size: ["small", false, "large", "huge"]}], // custom dropdown
                                [{header: [1, 2, 3, 4, 5, 6, false]}],
                                [{font: []}],
                                [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strike",
                                    {color: []},
                                ],
                                ["blockquote", "code-block"],
                                [{list: "ordered"}, {list: "bullet"}],
                                [{script: "sub"}, {script: "super"}], // superscript/subscript
                                [{indent: "-1"}, {indent: "+1"}], // outdent/indent
                                [{align: []}],
                                ["image"],
                            ],

                            handlers: {
                                image: imageHandler,
                            },
                        },
                    }}
                    formats={PostBlogs.formats}
                    bounds={".app"}
                />
                <Button onClick={() => console.log(editorHtml)}> Submit</Button>
            </div>
        </div>
    );
};
// PostBlogs.modules = {
//     toolbar: [
//         // [{header: 1}, {header: 2}],
//         [{size: ["small", false, "large", "huge"]}], // custom dropdown
//         [{header: [1, 2, 3, 4, 5, 6, false]}],
//         [{font: []}],
//         ["bold", "italic", "underline", "strike", {color: []}],
//         ["blockquote", "code-block"],
//         [{list: "ordered"}, {list: "bullet"}],
//         [{script: "sub"}, {script: "super"}], // superscript/subscript
//         [{indent: "-1"}, {indent: "+1"}], // outdent/indent
//         [{align: []}],
//         {
//             handlers: {
//                 image: imageHandler,
//             },
//         },
//     ],

//     clipboard: {
//         matchVisual: false,
//     },
// };
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
