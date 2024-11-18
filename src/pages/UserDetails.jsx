import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const {
    name,
    email,
    address: { city },
  } = useLoaderData();

  return (
    <>
      <h1 className="text-3xl font-semibold text-center py-6">UserDetails</h1>
      <div className="flex justify-center items-center mt-10">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <div className="text-xl font-medium text-gray-900">
            Name: <span className="text-gray-700">{name}</span>
          </div>
          <div className="text-xl font-medium text-gray-900 mt-4">
            Email: <span className="text-gray-700">{email}</span>
          </div>
          <div className="text-xl font-medium text-gray-900 mt-4">
            City: <span className="text-gray-700">{city}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
