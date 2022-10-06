// import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import { React, useState } from "react";

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = (blog) => {
    setGetBlogContent(blog);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage data={getData} />} />
        <Route
          path="/blog/:id"
          element={<BlogPost content={getBlogContent} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
