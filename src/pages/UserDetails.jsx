import { FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const {
    name,
    email,
    address: { city },
  } = useLoaderData();

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white text-center">
              User Profile
            </h1>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="flex flex-col space-y-6">
              {/* Name */}
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition duration-300">
                <FaUser className="text-2xl text-orange-500" />
                <div>
                  <p className="text-sm text-orange-600">Name</p>
                  <p className="text-lg font-semibold text-gray-800">{name}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition duration-300">
                <FaEnvelope className="text-2xl text-orange-500" />
                <div>
                  <p className="text-sm text-orange-600">Email</p>
                  <p className="text-lg font-semibold text-gray-800">{email}</p>
                </div>
              </div>

              {/* City */}
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition duration-300">
                <FaMapMarkerAlt className="text-2xl text-orange-500" />
                <div>
                  <p className="text-sm text-orange-600">City</p>
                  <p className="text-lg font-semibold text-gray-800">{city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
