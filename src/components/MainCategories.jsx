import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-2xl xl:rounded-full p-2 shadow-lg items-center justify-center gap-2">
      {/* Links */}
      <div className="flex-1 flex flex-wrap items-center gap-2">
        <Link to = "/posts" className="hover:bg-pink-200 rounded-full px-4 py-2 font-medium">All Posts</Link>
        <Link to = "/posts?cat=web-design" className="hover:bg-pink-200 rounded-full px-4 py-2 font-medium">Web Design</Link>
        <Link to = "/posts?cat=development" className="hover:bg-pink-200 rounded-full px-4 py-2 font-medium">Development</Link>
        <Link to = "/posts?cat=database" className="hover:bg-pink-200 rounded-full px-4 py-2 font-medium">Database</Link>
        <Link to = "/posts?cat=search-engine" className="hover:bg-pink-200 rounded-full px-4 py-2 font-medium">Search Engines</Link>
        <Link to = "/posts?cat=marketing" className="hover:bg-pink-200 rounded-full px-4 py-2 font-medium">Marketing</Link>
        
      </div>
      <span className="text-xl font-medium"> | </span>
      {/* Search */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <SearchIcon className="text-gray-500" />
        <input type = "text" placeholder="Search a post..." className="bg-transparent focus:outline-none px-4 py-1 w-full"/>
      </div>
    </div>
  );
};

export default MainCategories;
