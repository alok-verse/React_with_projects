function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">🏠</div>

        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Welcome Home
        </h1>

        <p className="text-gray-600 mb-6">
          This is the Home Page of our React Router project. Navigate through
          different pages using the navigation bar and explore React Router in
          action.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition">
            Get Started
          </button>

          <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-5 py-2 rounded-lg transition">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;