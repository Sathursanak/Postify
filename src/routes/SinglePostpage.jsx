import { Link } from "react-router-dom";
import SinglePostAction from "../components/SinglePostAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostpage = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* details */}
      <div className="mt-8 flex gap-8">
        {/* title */}
        <div className="lg:w-3/5 flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            laudantium ipsum totam obcaecati.
          </h1>
          <div className="flex items-center gap-2 text-sm font-light">
            <span>Written by</span>
            <Link className="text-blue-900">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-900">Web Design</Link>
            <span>3 weeks ago</span>
          </div>

          <p className="font-medium text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            illum commodi voluptatibus corporis obcaecati et, explicabo odio
            numquam similique doloremque a impedit vero voluptatum ut dolor illo
            aspernatur. Quisquam, ex.
          </p>
        </div>

        {/* image */}
        <div className="hidden lg:block w-2/5">
          <img src="/featured1.jpeg" className="rounded-3xl object-cover"></img>
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 ">
        {/* text */}
        <div className="lg:text-lg flex-col gap-8 text-justify mr-2">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            molestias hic quas, dolorum repellat sunt eius ad accusamus
            necessitatibus fuga assumenda aperiam asperiores consequatur,
            excepturi numquam totam, odit unde sint eos qui consectetur facere
            autem. Doloribus dolorem alias, maiores debitis dolore odit
            dignissimos, quisquam earum minus ullam eaque. Alias, quia. Quia
            exercitationem possimus nisi optio? Non dolore animi libero nihil
            dicta voluptatem! Non porro placeat nostrum nemo incidunt itaque ad
            unde laudantium repellat facilis. Aperiam laboriosam odio illo
            omnis! Voluptas, sit, esse animi sed saepe minus consequuntur error
            in odit unde doloribus. Maiores odit officiis eum asperiores tempora
            tempore assumenda!
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            nam vitae molestiae placeat eligendi impedit magnam earum cupiditate
            accusantium repudiandae quasi delectus autem animi aliquam excepturi
            qui et iure, molestias laudantium! Illum mollitia ea itaque, illo
            minus odit ratione sunt voluptatibus nihil libero magni modi
            voluptate dolorum, facilis temporibus possimus?
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            corrupti deserunt? Sapiente ea magnam tenetur aspernatur accusamus
            placeat! Pariatur ipsa quibusdam corrupti doloremque! Earum quas
            nulla quo deleniti, repudiandae cumque.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptates quas suscipit iusto recusandae quibusdam cupiditate, nemo
            accusamus totam fugiat fugit nisi ab in asperiores, ea ex quia
            veniam, cum rerum! Quod, delectus reiciendis esse repellendus ad
            dolorum dolor vel inventore minus aut, impedit veniam porro aliquam
            voluptatem eum explicabo architecto excepturi accusamus odit sequi
            molestiae saepe consequuntur iusto distinctio. Harum cum veritatis
            veniam magnam distinctio nobis, quasi, aspernatur suscipit tenetur
            voluptate, eaque velit doloremque. Id omnis quam facilis voluptatum
            deleniti sit iste nam ab, ratione, perspiciatis eius tempore
            doloremque consequatur sed explicabo repudiandae odit. Quos beatae
            quod reiciendis consequatur!
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            molestias hic quas, dolorum repellat sunt eius ad accusamus
            necessitatibus fuga assumenda aperiam asperiores consequatur,
            excepturi numquam totam, odit unde sint eos qui consectetur facere
            autem. Doloribus dolorem alias, maiores debitis dolore odit
            dignissimos, quisquam earum minus ullam eaque. Alias, quia. Quia
            exercitationem possimus nisi optio? Non dolore animi libero nihil
            dicta voluptatem! Non porro placeat nostrum nemo incidunt itaque ad
            unde laudantium repellat facilis. Aperiam laboriosam odio illo
            omnis! Voluptas, sit, esse animi sed saepe minus consequuntur error
            in odit unde doloribus. Maiores odit officiis eum asperiores tempora
            tempore assumenda!
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            nam vitae molestiae placeat eligendi impedit magnam earum cupiditate
            accusantium repudiandae quasi delectus autem animi aliquam excepturi
            qui et iure, molestias laudantium! Illum mollitia ea itaque, illo
            minus odit ratione sunt voluptatibus nihil libero magni modi
            voluptate dolorum, facilis temporibus possimus?
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            corrupti deserunt? Sapiente ea magnam tenetur aspernatur accusamus
            placeat! Pariatur ipsa quibusdam corrupti doloremque! Earum quas
            nulla quo deleniti, repudiandae cumque.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptates quas suscipit iusto recusandae quibusdam cupiditate, nemo
            accusamus totam fugiat fugit nisi ab in asperiores, ea ex quia
            veniam, cum rerum! Quod, delectus reiciendis esse repellendus ad
            dolorum dolor vel inventore minus aut, impedit veniam porro aliquam
            voluptatem eum explicabo architecto excepturi accusamus odit sequi
            molestiae saepe consequuntur iusto distinctio. Harum cum veritatis
            veniam magnam distinctio nobis, quasi, aspernatur suscipit tenetur
            voluptate, eaque velit doloremque. Id omnis quam facilis voluptatum
            deleniti sit iste nam ab, ratione, perspiciatis eius tempore
            doloremque consequatur sed explicabo repudiandae odit. Quos beatae
            quod reiciendis consequatur!
          </p>
        </div>

        {/* side menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-8">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="/userImg.jpeg"
              />
              <Link className="text-blue-900">John Doe </Link>
            </div>
            <p className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ipsum minus quasi optio ipsa
            </p>
            <div className="flex gap-2">
              <Link>
                <img src="/facebook.svg" />
              </Link>

              <Link>
                <img src="/instagram.svg" />
              </Link>
            </div>
          </div>

          <SinglePostAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex  flex-col gap-2 text-sm">
            <Link className="hover:underline" to="/Posts">
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
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      {/* comments */}
      <Comments />
    </div>
  );
};

export default SinglePostpage;
