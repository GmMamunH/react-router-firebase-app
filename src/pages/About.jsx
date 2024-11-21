const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">About Us</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl">
          <div className="prose prose-lg prose-invert">
            <p className="mb-6">
              Welcome to our innovative digital solutions platform. We are passionate about 
              creating exceptional experiences through cutting-edge technology.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6">
              To deliver outstanding digital solutions that empower businesses and individuals 
              to achieve their goals through innovative technology and creative excellence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p>Pushing boundaries with creative solutions</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p>Committed to excellence in every project</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p>Building trust through transparent practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
