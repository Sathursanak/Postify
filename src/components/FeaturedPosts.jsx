import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* 1st Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <img src="/featured1.jpeg" className="rounded-3xl object-cover" />

        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-900"> Web Design</Link>
          <span>3weeks ago</span>
        </div>

        {/* Title */}
        <Link to="/test" className="text-xl lg:text-3xl font-semibold">
          Rerum sapiente eius nesciunt non, laborum odio officia doloremque
        </Link>
      </div>

      {/* other Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* 2nd post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="/featured2.jpeg"
            className="rounded-3xl object-cover w-1/3"
          />
          <div className="w-2/3 mt-4">
            <div className="flex items-center gap-4  text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-blue-900"> Web Design</Link>
              <span>2days ago</span>
            </div>
            <Link to="/test" className="text-lg lg:text-xl font-medium">
              Dolorum eligendi eveniet voluptatibus quaerat quidem quod in
              aperiam fuga
            </Link>
          </div>
        </div>

        {/* 3rd post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="/featured4.jpeg"
            className="rounded-3xl object-cover w-1/3"
          />
          <div className="w-2/3 mt-4">
            <div className="flex items-center gap-4  text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">03.</h1>
              <Link className="text-blue-900"> Web Design</Link>
              <span>2days ago</span>
            </div>
            <Link to="/test" className="text-lg lg:text-xl font-medium">
              Dolorum eligendi eveniet voluptatibus quaerat quidem quod in
              aperiam fuga
            </Link>
          </div>
        </div>

        {/* 4th post */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="/featured3.jpeg"
            className="rounded-3xl object-cover w-1/3"
          />
          <div className="w-2/3 mt-4">
            <div className="flex items-center gap-4  text-sm lg:text-base mb-4">
              <h1 className="font-semibold lg:text-lg">04.</h1>
              <Link className="text-blue-900"> Web Design</Link>
              <span>2days ago</span>
            </div>
            <Link to="/test" className="text-lg lg:text-xl font-medium">
              Dolorum eligendi eveniet voluptatibus quaerat quidem quod in
              aperiam fuga
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
