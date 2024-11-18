import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-200 text-black py-6">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full block flex-grow lg:flex lg:items-center`}
        >
          <div className="text-md lg:flex justify-between items-center w-full">
            <NavLink to={"/"}>
              <div className="mr-6">
                <span className="font-semibold text-xl tracking-tight">
                  ASSDI
                </span>
              </div>
            </NavLink>
            <div className="space-x-6">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 block mt-4 lg:inline-block lg:mt-0 hover:text-orange-500 "
                    : "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 "
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/users"}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 block mt-4 lg:inline-block lg:mt-0 hover:text-orange-500 "
                    : "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 "
                }
              >
                Users
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 block mt-4 lg:inline-block lg:mt-0 hover:text-orange-500 "
                    : "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 "
                }
              >
                Contact
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 block mt-4 lg:inline-block lg:mt-0 hover:text-orange-500 "
                    : "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-500 "
                }
              >
                About
              </NavLink>
              <NavLink
                to={"/signup"}
                className="text-white bg-orange-500 block mt-4 lg:inline-block lg:mt-0 py-1.5 px-4 rounded-md hover:bg-orange-600"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
