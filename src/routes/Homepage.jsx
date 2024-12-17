import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import RecentPosts from "../components/RecentPosts";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BreadCrumb */}
      <div className="flex gap-2">
        <Link to="/"> Home | </Link>
        <span className="text-blue-900">Blogs and Articales</span>
      </div>

      {/* Introduction */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-6xl font-bold">
            Postify: Express Yourself to the World
          </h1>
          <p className="mt-4 text-md md:text-xl">
            Where Every Thought, Idea, and Experience Finds Its Voice - Share,
            Inspire, and Make an Impact Across the Globe!
          </p>
        </div>
        {/* Button to create new blog post */}
        <Link to="Write" className="relative " >
          <svg
            viewBox="0 0 200 200"
            width="150"
            height="150"
            className="text-lg tracking-[0.25em] animate-spin animatedButton"
          >
            <path
              id="CirclePath"
              fill="none"
              d="M 100, 100 m-75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150,0"
            />
            <text>
              <textPath href="#CirclePath" startOffset="0%">
                Write your story .{" "}
              </textPath>
              <textPath href="#CirclePath" startOffset="50%">
                Share your idea .{" "}
              </textPath>
            </text>
          </svg>

          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="/write.png"
              alt="Write"
              className="w-20 h-20 bg-transparent"
            />
          </button>
        </Link>
      </div>

      {/* Categories */}
      <MainCategories/>

      {/* Featured Posts */}
      <FeaturedPosts/>
      <hr className="my-2"></hr>
      {/* Recent posts */}
      <h1 className="my-4 text-2xl text-gray-800">Recent Posts</h1>
      <RecentPosts/>
    </div>
  );
};

export default Homepage;
