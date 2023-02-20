import "./App.css";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Blogs} from "./pages/blogs";
import Navbar from "./component/navbar";
import PostBlogs from "./pages/postBlogs.js";
function App() {
    return (
        <div>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Blogs />} />
                    <Route path="/postBlog" element={<PostBlogs />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
