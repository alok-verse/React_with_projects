function About() {
  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          About Us
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to the About Page! This page is built using React and
          Tailwind CSS. Here you can learn more about our website and explore
          React Router navigation.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;