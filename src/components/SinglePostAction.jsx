import { MdOutlineSaveAlt } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const SinglePostAction = () => {
  return (
    <div>
      <h1 className="mt-8 mb-2 text-sm font-medium"> Actions </h1>
      <div >
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <MdOutlineSaveAlt className="w-5 h-5" />
        <span>Save this Post</span>
        </div>
        <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <MdDelete className="w-5 h-5" />
        <span>Delete this Post</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePostAction;
