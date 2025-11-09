import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#f9e6e6] text-gray-800 py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="w-full flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-red-500">♥</span> LifeSaver
        </Link>

        <div className="space-x-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/find">Find Donor</Link>
          <Link to="/awareness">Awareness</Link>
        </div>
      </div>
    </nav>
  );
}
