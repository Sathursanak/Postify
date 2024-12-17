import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        {/* Logo */}
        <img src="logo.png" className="w-8 h-8" alt="Logo" />
        <h1>Postify</h1>
      </Link>

      {/* Mobile menu */}
      <div className="md:hidden">
        {/* Hamburger menu icons*/}
        <div
          className="p-4 text-3xl"
          onClick={() => setOpen((prevous) => !prevous)}
        ></div>
        <div
          className="cursor-pointer text-3xl mb-6"
          onClick={() => setOpen((prevous) => !prevous)}
        >
          {/* {open ? "X": "\u2630"} */}
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* mobile link list */}
        <div
          className={`w-full h-screen  flex flex-col items-center justify-center gap-8 font-bold text-lg absolute top-16 bg-pink-200 transition-all duration-300 ease-in-out ${
            open ? "right-[0]" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Tranding</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-pink-300">Login</button>
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-bold">
        <Link to="/">Home</Link>
        <Link to="/">Tranding</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        

        <SignedOut>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-pink-200">Login</button>
        </Link>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
