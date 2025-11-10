import { useState, useEffect } from "react";

export default function FindDonor() {
  const [bloodgroup, setBloodgroup] = useState("");
  const [city, setCity] = useState("");
  const [donors, setDonors] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const storedDonors = JSON.parse(localStorage.getItem("donors")) || [];
    setDonors(storedDonors);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const result = donors.filter(
      (donor) =>
        donor.bloodgroup.trim().toLowerCase() === bloodgroup.trim().toLowerCase() &&
        donor.city.trim().toLowerCase() === city.trim().toLowerCase()
    );

    setFiltered(result);
  };

  return (
    <div className="w-full min-h-[calc(100vh-70px)] flex flex-col items-center bg-gradient-to-r from-red-700 to-red-500 pt-24 px-6 pb-16">

      <form onSubmit={handleSearch} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl space-y-6">
        <h2 className="text-3xl font-bold text-red-600 text-center">Find Blood Donor</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select
            value={bloodgroup}
            onChange={(e) => setBloodgroup(e.target.value)}
            className="p-3 border rounded-xl"
            required
          >
            <option value="">Select Blood Group</option>
            <option>A+</option><option>A-</option>
            <option>B+</option><option>B-</option>
            <option>O+</option><option>O-</option>
            <option>AB+</option><option>AB-</option>
          </select>

          <input
            type="text"
            placeholder="Enter City / Area"
            className="p-3 border rounded-xl"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all">
          Search Donor
        </button>
      </form>

      <div className="w-full max-w-5xl mt-10">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filtered.map((donor, index) => (
              <div key={index} className="bg-white shadow-2xl rounded-2xl p-8 border border-red-300 flex flex-col md:flex-row gap-6">
                <div className="flex flex-col justify-center items-center bg-red-100 p-6 rounded-xl w-full md:w-1/3">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3421/3421098.png"
                    alt="blood donor"
                    className="w-28 h-28"
                  />
                  <h2 className="text-xl font-bold text-red-600 mt-3">{donor.bloodgroup}</h2>
                </div>

                <div className="w-full md:w-2/3 space-y-2 text-gray-800 text-lg">
                  <p><span className="font-bold">👤 Full Name:</span> {donor.fullname}</p>
                  <p><span className="font-bold">📱 Phone Number:</span> {donor.phone}</p>
                  <p><span className="font-bold">📍 City/Area:</span> {donor.city}</p>

                  {donor.medical && (
                    <p><span className="font-bold">⚕ Medical Notes:</span> {donor.medical}</p>
                  )}

                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-center mt-8 text-xl">
            🔍 No donors found. Try another search.
          </p>
        )}
      </div>
    </div>
  );
}
