import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import Loading from "../components/Loading";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-800 dark:to-slate-900">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">
                {user ? `Welcome Back,\n${user.displayName}` : "Transform Your\nDigital Experience"}
              </span>
            </h1>
            <p className="text-xl text-gray-400 dark:text-gray-300 mb-8 max-w-xl">
              Unleash the power of innovation with our cutting-edge solutions designed to elevate your digital journey.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg">
                Get Started Now
              </button>
              <button className="px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg transition-all">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <img 
              src="https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg"
              alt="Digital Technology Illustration" 
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </section>

       

        {/* Features Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Integration",
                description: "Connect seamlessly with your favorite tools and platforms",
                icon: "🔄",
                color: "bg-blue-100 dark:bg-blue-900/30"
              },
              {
                title: "Enterprise Security",
                description: "Bank-grade encryption and advanced security protocols",
                icon: "🔒",
                color: "bg-green-100 dark:bg-green-900/30"
              },
              {
                title: "Expert Support",
                description: "Dedicated team of experts available around the clock",
                icon: "💬",
                color: "bg-purple-100 dark:bg-purple-900/30"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all ${feature.color}`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-orange-500">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-orange-500 to-orange-300 rounded-2xl p-12 my-40">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their digital experience with us.
          </p>
          <button className="px-8 py-4 bg-white text-orange-500 rounded-lg font-semibold hover:bg-gray-100 transition-all">
            Start Your Free Trial
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
