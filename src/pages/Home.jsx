import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import Loading from "../components/Loading";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <div className="px-6 h-[80svh] text-center text-surface dark:bg-neutral-500 dark:text-white">
          <div className="flex flex-col justify-center items-center h-full">
            {user ? (
              <h1 className="text-5xl font-semibold">
                Welcome to our website: {user.displayName}
              </h1>
            ) : (
              <h1 className="text-5xl font-semibold">
                Signup or login to view your profile
              </h1>
            )}

            <a
              className="inline-block rounded bg-primary px-6 py-2 pb-3 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mt-6"
              role="button"
            >
              Learn more
              <span className="ml-2 text-2xl">→</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
