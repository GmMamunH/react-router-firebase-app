import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { toast, ToastContainer } from "react-toastify";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully", {
        onClose: () => navigate("/login"),
      });
    } catch (error) {
      toast.error("An error occurred while logging out", error);
    }
  };

  return (
    <nav className="bg-slate-200 text-black py-4">
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
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
              {user ? (
                <button
                  className="text-white bg-orange-500 block mt-4 lg:inline-block lg:mt-0 py-1.5 px-4 rounded-md hover:bg-orange-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to={"/signup"}
                  className="text-white bg-orange-500 block mt-4 lg:inline-block lg:mt-0 py-1.5 px-4 rounded-md hover:bg-orange-600"
                >
                  Sign Up
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
