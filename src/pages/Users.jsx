import { useLoaderData } from "react-router-dom";
import User from "../components/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <>
      <h1 className="text-3xl text-center font-semibold py-6">Users</h1>
      <div className="container grid grid-cols-4 gap-6 mx-auto">
        {users.length > 0 ? (
          users.map((user) => <User key={user.id} user={user} />)
        ) : (
          <p className="text-orange-500 text-center font font-semibold">
            No users found.
          </p>
        )}
      </div>
    </>
  );
};

export default Users;
