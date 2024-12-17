import SingleComment from "./SingleComment"

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="my-4 text-2xl text-gray-800">
      Comments
      </h1>

      <div className="flex items-center justify-between gap-8 w-full">
        <textarea placeholder="Write a comment..." className="w-full p-4 rounded-xl focus:outline-none"/>
        <button className=" bg-white py-2 px-4 mr-2 font-medium rounded-xl">
          Submit
        </button>
      </div>
      <SingleComment/>
      <SingleComment/>
      <SingleComment/>
      <SingleComment/>
      <SingleComment/>
    </div>
  )
}

export default Comments
