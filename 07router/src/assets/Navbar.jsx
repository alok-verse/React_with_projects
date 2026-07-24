import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          React Router
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="px-5 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white"
          >
            🏠 Home
          </Link>

          <Link
            to="/about"
            className="px-5 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-white"
          >
            ℹ️ About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;