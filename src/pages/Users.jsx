import { useLoaderData } from "react-router-dom";
import User from "../components/User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-50 py-8 mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-orange-500 text-center mb-10">
          Our Users
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.length > 0 ? (
            users.map((user) => <User key={user.id} user={user} />)
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-orange-600 font-medium">
                No users available at the moment
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
