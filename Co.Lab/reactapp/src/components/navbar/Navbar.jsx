import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between p-3 sticky top-0 z-50">
      <h1 className="font-bold text-2xl font-sans ml-2">Scam Guardian</h1>

      <Link
        to="#"
        className="mr-2 bg-blue-600 bg-opacity-100 p-2 hover:scale-95 cursor-pointer duration-75"
      >
        Download Extension
      </Link>
    </nav>
  );
};

export default Navbar;
