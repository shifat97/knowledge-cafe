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
    <main className="flex justify-between gap-[24px]">
      {/* Blog Section */}
      <section id="blogs" className="grid grid-cols-1 gap-4 w-[60%]">
        {blogs.map((blog, index) => (
          <Blog blog={blog} key={index} />
        ))}
      </section>
      {/* Bookmark Section */}
      <section id="bookmark" className="w-[40%]">
        <h1 className="bg-[rgba(96,71,236,0.10)] px-6 py-[11px] rounded-[8px] text-[#6047EC] font-bold text-center">
          Spent time on read: 177 min
        </h1>
        <div className="mt-[24px] bg-black/5 rounded-[8px] p-[30px]">
          <h1 className="text-[20px] font-bold">Bookmarked Blogs: 8</h1>
          <div className="mt-4">
            <h1 className="bg-white rounded-[8px] p-4 font-semibold">
              How to Build a Personal Brand in 2025
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
