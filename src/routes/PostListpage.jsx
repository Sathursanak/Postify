import RecentPosts from "../components/RecentPosts";
import SideMenu from "../components/SideMenu";
import { useState } from "react";

const PostListpage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-white text-sm px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <div>
          <RecentPosts />
        </div>
        <div className={`${open ? "block":"hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListpage;
