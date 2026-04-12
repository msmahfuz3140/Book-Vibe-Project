import React from "react";
import { NavLink } from "react-router";

const Nav = () => {

    const navLinkStyle = ({ isActive }) =>
        `relative px-4 py-2 font-semibold transition-all duration-300
     ${isActive
            ? "text-green-500"
            : "text-gray-600 hover:text-green-500"
        }
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:bg-green-500 after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

    const links = (
        <>
            <li><NavLink className={navLinkStyle} to="/">Home</NavLink></li>
            <li><NavLink className={navLinkStyle} to="/books">Listed Books</NavLink></li>
            <li><NavLink className={navLinkStyle} to="/pageToRead">Page to Read</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm">

            <div className="navbar w-[95%] lg:w-[90%] mx-auto py-3">

                {/* LEFT */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button"
                            className="btn btn-ghost lg:hidden">
                            ☰
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1]
              p-4 shadow-xl bg-white rounded-2xl w-52 space-y-2">
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <h1 className="text-2xl md:text-3xl font-extrabold
          bg-gradient-to-r from-green-500 to-emerald-700
          bg-clip-text text-transparent">
                        Book Vibe
                    </h1>
                </div>

                {/* CENTER MENU */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4">
                        {links}
                    </ul>
                </div>

                {/* RIGHT BUTTONS */}
                <div className="navbar-end gap-3">

                    <button className="px-5 py-2 rounded-xl
          border border-green-500 text-green-500
          hover:bg-green-500 hover:text-white
          transition-all duration-300">
                        Sign In
                    </button>

                    <button className="px-5 py-2 rounded-xl
          bg-gradient-to-r from-green-500 to-emerald-600
          text-white shadow-lg hover:scale-105
          transition-all duration-300">
                        Sign Up
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Nav;