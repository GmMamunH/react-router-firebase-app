import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-slate-200 text-black py-6">
      <div className="container mx-auto">
        <div className={`w-full`}>
          <div className="text-md flex justify-between items-center w-full">
            <NavLink to={"/"}>
              <div className="mr-6">
                <span className="font-semibold text-xl tracking-tight">
                  ASSDI
                </span>
              </div>
            </NavLink>
            <div className="space-x-6 flex justify-between items-center">
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
