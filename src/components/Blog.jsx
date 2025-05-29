import bookmarkIcon from "../assets/icons/bookmark.svg";

const Blog = ({ blog, handleBookmarkBlogs }) => {
  const {
    id,
    image,
    authorName,
    authorImage,
    postDate,
    totalReadTime,
    title,
    hashtags,
    bookmark,
  } = blog;

  return (
    <div>
      <img className="rounded-[8px] w-full" src={image} alt="" />
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-[24px]">
            <h1 className="w-[60px] h-[60px] bg-black/10 rounded-full flex items-center justify-center">
              {authorImage}
            </h1>
            <div>
              <h3 className="text-lg font-bold">{authorName}</h3>
              <p className="text-sm text-black/60 font-medium">{postDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[20px] text-black/60">{totalReadTime}</p>
            <button onClick={() => handleBookmarkBlogs(id, title)}>
              <img
                className={`${
                  bookmark ? "bg-green-400" : "bg-white"
                } p-1 rounded-full`}
                src={bookmarkIcon}
                alt=""
              />
            </button>
          </div>
        </div>
        <h1 className="mt-[16px] text-[30px] md:text-[40px] font-bold">
          {title}
        </h1>
        <div className="mt-[16px] flex items-center gap-3 text-black/60">
          {hashtags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <button className="text-[20px] font-semibold text-[#6047EC] mt-4 hover:underline cursor-pointer">
          Mark as read
        </button>
        <div className="h-[1px] bg-black/20 my-3"></div>
      </div>
    </div>
  );
};

export default Blog;
