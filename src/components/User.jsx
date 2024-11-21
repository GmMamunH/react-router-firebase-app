import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({ user }) => {
  console.log(navigation)
  const { id, name, email } = user;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      <div className="p-6">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-orange-500">
            {name.charAt(0)}
          </span>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
          {name}
        </h2>
        <p className="text-gray-600 text-center text-sm mb-4">
          {email}
        </p>
        
        <Link 
          to={`/users/${id}`}
          className="block w-full"
        >
          <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 font-medium">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default User;
