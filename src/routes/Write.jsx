import { useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  //  if(!isLoaded) {
  //   return <div className="">Loading...</div>
  //  }

  //  if(isLoaded && !isSignedIn) {
  //   return <div className="">You should login!</div>
  //  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="my-4 text-2xl text-gray-800">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="w-max p-2 rounded-xl text-sm text-gray-500 bg-white">
          Add a cover image{" "}
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="Title of my post "
        />
        <div className="flex items-center gap-4">
          <label className="text-sm" htmlFor=""> Select the category </label>
          <select name="cat" id="" className="focus outline-none p-2 rounded-xl bg-white">
            <option value="General">General</option>
            <option value="Web Design">Web Design</option>
            <option value="Development">Development</option>
            <option value="Database">Database</option>
            <option value="Search Engine">Search Engines</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <textarea className="focus outline-none p-2 rounded-xl " name="desc" placeholder="Short description " />
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white" />
        <button className= "bg-white py-2 px-4 mr-2 font-medium rounded-xl w-36">Post</button>
      </form>
    </div>
  );
};

export default Write;
