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
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <NavLink to={"/"} className="flex items-center">
            <span className="font-semibold text-xl tracking-tight text-orange-600">
              ASSDI
            </span>
          </NavLink>
          <div className="flex items-center space-x-6">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 hover:text-orange-500"
                  : "text-black hover:text-orange-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/users"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 hover:text-orange-500"
                  : "text-black hover:text-orange-500"
              }
            >
              Users
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 hover:text-orange-500"
                  : "text-black hover:text-orange-500"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 hover:text-orange-500"
                  : "text-black hover:text-orange-500"
              }
            >
              About
            </NavLink>
            {user ? (
              <button
                className="text-white bg-orange-500 py-2 px-4 rounded-md hover:bg-orange-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <NavLink
                to={"/signup"}
                className="text-white bg-orange-500 py-2 px-4 rounded-md hover:bg-orange-600"
              >
                Sign Up
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
