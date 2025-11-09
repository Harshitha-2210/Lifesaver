import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-70px)] flex bg-gradient-to-r from-red-800 to-red-500 text-white overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="flex-1 flex flex-col justify-center px-12 md:px-24 z-10 relative">
        <h1 className="text-7xl font-extrabold leading-tight">
          LifeSaver
        </h1>

        <h2 className="text-4xl font-semibold mt-4 opacity-95">
          A Blood Donation System
        </h2>

        <p className="mt-6 text-xl opacity-90">
          Donate Blood. Save Lives. Your donation can save up to 3 people.
        </p>

        <div className="mt-10 flex gap-6">
          <Link to="/register">
            <button className="bg-white text-red-600 px-8 py-3 text-lg rounded-xl font-semibold shadow-lg hover:bg-red-200 transition-all">
              Register as Donor
            </button>
          </Link>

          <Link to="/find">
            <button className="border border-white px-8 py-3 text-lg rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all">
              Find Donor
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT ANIMATED BLOBS */}
      <div className="flex-1 h-full relative hidden md:flex items-center justify-center overflow-hidden">
        {/* Blob 1 */}
        <div className="absolute w-64 h-64 bg-red-600 rounded-full opacity-50 animate-blob top-10 left-20"></div>
        {/* Blob 2 */}
        <div className="absolute w-72 h-72 bg-orange-500 rounded-full opacity-40 animate-blob animation-delay-2000 top-32 left-40"></div>
        {/* Blob 3 */}
        <div className="absolute w-56 h-56 bg-pink-500 rounded-full opacity-30 animate-blob animation-delay-4000 top-20 left-60"></div>
      </div>
    </div>
  );
}
