
const SingleComment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-4 mr-2">
      <div className="flex items-center gap-4">
        <img src="/profile.jpeg" className="w-10 h-10 rounded-full object-cover"/>
        <span className="font-medium">Lama dev</span>
        <span className="text-sm text-gray-600">4days ago</span>
      </div>
      <div className="mt-2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo quibusdam cupiditate minus dolore fugit porro aspernatur exercitationem! Odit, obcaecati?</p>
      </div>
    </div>
  )
}

export default SingleComment
