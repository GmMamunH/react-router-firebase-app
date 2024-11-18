import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({ user }) => {
  console.log(navigation)
  const { id, name, email } = user;
  return (
    <>
      <div className="items-center p-10 bg-gray-100 rounded-md shadow-md space-y-3">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 text-sm">{email}</p>
        <Link to={`/users/${id}`}>
          <button className="bg-gray-300 py-1.5 px-2 mt-3">User Details</button>
        </Link>
      </div>
    </>
  );
};

export default User;
