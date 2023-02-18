import React from "react";
import Navbar from "../component/navbar";
import "../App.css";
import Blogcontent from "../assets/data/blogcontent.json";
export const Blogs = () => {
    return (
        <div>
            <Navbar />
            <div className="outer-blog-body">
                <div className="inner-blog-body">
                    {Blogcontent?.map((blog) => (
                        <div className="blog_post">
                            <>
                                <div class="img_pod">
                                    <img src={blog.image} alt="random image" />
                                </div>
                                <div class="container_copy">
                                    <h3>{blog.date}</h3>
                                    <h1>{blog.title}</h1>
                                    <p>{blog.description}</p>
                                    <a
                                        class="btn_primary"
                                        href="#"
                                        target="_blank"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
