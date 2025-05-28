import { useEffect, useState } from "react";
import Blog from "./Blog";

const Main = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <main>
      {/* Blog Section */}
      <section id="blogs" className="grid grid-cols-1 gap-4">
        {blogs.map((blog, index) => (
          <Blog blog={blog} key={index} />
        ))}
      </section>
      {/* Bookmark Section */}
    </main>
  );
};

export default Main;
