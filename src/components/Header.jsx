import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 shadow-lg py-3 flex items-center justify-between">
      <div className="text-white text-2xl font-georgia font-bold pl-10">
        LMS
      </div>
      <nav className="md:flex space-x-12 text-lg font-serif text-black pr-10 hidden">
         <Link to="/" className="hover:text-blue-300 transition">
  Home
</Link>
       <Link to="/about" className="hover:text-blue-300 transition">
  About
</Link>
        <Link to="/courses" className="hover:text-blue-300 transition">
  Courses
</Link>
<Link to="/instructors" className="hover:text-blue-300 transition">
  instructors
</Link>
      </nav>
      <div className="pr-10">
        <button className="bg-blue-600 text-black font-serif font-bold px-4 py-2 border border-white rounded-xl hover:bg-blue-800 hover:text-white transition">
          Login
        </button>
        </div>
    </header>
  );
};

export default Header;
