import { Link } from "react-router-dom";

const PostItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="xl:w-1/3 " >
       <img src="/postImg.jpeg" className="rounded-2xl object-cover"/>
      </div>

      {/* details */}
      <div className="flex flex-col gap-2 xl:w-2/3">
        <Link to="/test" className="lg:text-2xl font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nobis voluptate, aut numquam perspiciatis beatae!</Link>
        <div className="flex items-center gap-2 text-sm font-light">
          <span>Written by</span>
          <Link className="text-blue-900">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-900">Web Design</Link>
          <span>3 weeks ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit aliquid, officiis veritatis voluptates placeat maiores omnis quibusdam non! Numquam asperiores et doloribus non fuga accusantium, optio facere enim quia.</p>
        <Link to="/test" className="text-blue-900 hover:underline text-sm">Read More</Link>
      </div>
    </div>
  )
}

export default PostItem
