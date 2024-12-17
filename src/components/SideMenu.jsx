import Search from "../components/Search";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <lable className="flex items-center gap-2 cursor-pointer">
           <input type = "radio" name = "short" value = "Newest"  className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-900 bg-white"/>
           <span>Newest</span>
        </lable>
        <lable className="flex items-center gap-2 cursor-pointer">
           <input type = "radio" name = "short" value = "Oldest"  className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-900 bg-white"/>
           <span>Oldest</span>
        </lable>
        <lable className="flex items-center gap-2 cursor-pointer">
           <input type = "radio" name = "short" value = "Popular"  className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-900 bg-white"/>
           <span>Popular</span>
        </lable>
        <lable className="flex items-center gap-2 cursor-pointer">
           <input type = "radio" name = "short" value = "Most Commented"  className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-900 bg-white"/>
           <span>Most Commented</span>
        </lable>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="hover:underline" to="/posts">
          All
        </Link>
        <Link className="hover:underline" to="/posts?cat=web-design">
          Web Design
        </Link>
        <Link className="hover:underline" to="/posts?cat=development">
          Development
        </Link>
        <Link className="hover:underline" to="/posts?cat=database">
          Database
        </Link>
        <Link className="hover:underline" to="/posts?cat=search-engine">
          Search Engines
        </Link>
        <Link className="hover:underline" to="/posts?cat=marketing">
          Marketing
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
