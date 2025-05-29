import { useEffect, useState } from "react";
import Blog from "./Blog";
import {
  getStorageItems,
  removeStorageItems,
  setStorageItems,
} from "../utils/localStorage";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    const localStorageItems = getStorageItems();
    const storedItem = [];

    if (localStorageItems.length > 0) {
      for (const id of localStorageItems) {
        const blogInfo = blogs.find((blog) => blog.id === id);

        if (blogInfo) {
          storedItem.push(blogInfo.title);
        }
      }
    }

    setBookmarks(storedItem);
  }, [blogs]);

  const handleBookmarkBlogs = (id, title) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => {
        if (blog.id === id && !blog.bookmark) {
          // Set id to local storage
          setStorageItems(id);
          return { ...blog, bookmark: true };
        } else if (blog.id === id && blog.bookmark) {
          removeStorageItems(id);
          return { ...blog, bookmark: false };
        }
        return blog;
      })
    );

    setBookmarks((prevBookmarks) => {
      const isAlreadyBookmarked = prevBookmarks.find((mark) => mark === title);

      if (isAlreadyBookmarked) {
        return prevBookmarks.filter((mark) => mark != title);
      } else {
        return [...prevBookmarks, title];
      }
    });
  };

  const handleSpentTime = (totalReadTime) => {
    totalReadTime = totalReadTime.split(" ");
    // Update the total read time value
    setSpentTime(spentTime + parseInt(totalReadTime[0]));
  };

  return (
    <main className="flex justify-between gap-[24px]">
      {/* Blog Section */}
      <section id="blogs" className="grid grid-cols-1 gap-4 w-[60%]">
        {blogs.map((blog, index) => (
          <Blog
            blog={blog}
            handleBookmarkBlogs={handleBookmarkBlogs}
            handleSpentTime={handleSpentTime}
            key={index}
          />
        ))}
      </section>
      {/* Bookmark Section */}
      <section id="bookmark" className="w-[40%]">
        <h1 className="bg-[rgba(96,71,236,0.10)] px-6 py-[11px] rounded-[8px] text-[#6047EC] font-bold text-center">
          Spent time on read: {spentTime} mins
        </h1>
        <div className="mt-[24px] bg-black/5 rounded-[8px] p-[30px]">
          <h1 className="text-[20px] font-bold">
            Bookmarked Blogs: {bookmarks.length}
          </h1>
          <div className="mt-4 flex flex-col gap-4">
            {bookmarks.map((mark, index) => (
              <h1
                key={index}
                className="bg-white rounded-[8px] p-4 font-semibold"
              >
                {mark}
              </h1>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
