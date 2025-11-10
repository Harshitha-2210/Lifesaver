import { useState } from "react";

export default function RegisterDonor() {
  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    gender: "",
    weight: "",
    bloodgroup: "",
    phone: "",
    email: "",
    city: "",
    pincode: "",
    medical: "",
  });

  const [showSuccess, setShowSuccess] = useState(false); // ✅ Success message state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedDonors = JSON.parse(localStorage.getItem("donors")) || [];
    storedDonors.push(formData);
    localStorage.setItem("donors", JSON.stringify(storedDonors));

    setShowSuccess(true); // ✅ show success message popup
  };

  const closePopup = () => {
    setShowSuccess(false);

    // ✅ Now reset the form ONLY when user closes popup
    setFormData({
      fullname: "",
      age: "",
      gender: "",
      weight: "",
      bloodgroup: "",
      phone: "",
      email: "",
      city: "",
      pincode: "",
      medical: "",
    });
  };

  return (
    <div className="flex justify-center w-full min-h-[calc(100vh-70px)] bg-gradient-to-r from-red-700 to-red-500 pt-24 pb-12 px-6">

      {/* ✅ Popup Success Message */}
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 text-center w-[350px]">
            <h3 className="text-2xl font-bold text-red-600">✅ Registered Successfully!</h3>
            <p className="mt-2 text-gray-700">Thank you for registering as a donor.</p>
            <button
              onClick={closePopup}
              className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-4xl space-y-6"
      >
        <h2 className="text-4xl font-extrabold text-red-600 text-center mb-6">
          Register as Blood Donor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="fullname" type="text" placeholder="Full Name"
            className="p-3 border rounded-xl" value={formData.fullname} onChange={handleChange} required />

          <input name="age" type="number" placeholder="Age"
            className="p-3 border rounded-xl" value={formData.age} onChange={handleChange} required />

          <select name="gender" className="p-3 border rounded-xl"
            value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input name="weight" type="number" placeholder="Weight (kg)"
            className="p-3 border rounded-xl" value={formData.weight} onChange={handleChange} required />

          <select name="bloodgroup" className="p-3 border rounded-xl"
            value={formData.bloodgroup} onChange={handleChange} required>
            <option value="">Select Blood Group</option>
            <option>A+</option><option>A-</option>
            <option>B+</option><option>B-</option>
            <option>O+</option><option>O-</option>
            <option>AB+</option><option>AB-</option>
          </select>

          <input name="phone" type="tel" placeholder="Phone Number"
            className="p-3 border rounded-xl" value={formData.phone} onChange={handleChange} required />

          <input name="email" type="email" placeholder="Email Address"
            className="p-3 border rounded-xl" value={formData.email} onChange={handleChange} />

          <input name="city" type="text" placeholder="City / Area"
            className="p-3 border rounded-xl" value={formData.city} onChange={handleChange} required />

          <input name="pincode" type="text" placeholder="Pincode"
            className="p-3 border rounded-xl" value={formData.pincode} onChange={handleChange} required />
        </div>

        <textarea
          name="medical"
          placeholder="Any medical conditions or medications? (optional)"
          className="w-full p-4 border rounded-xl"
          value={formData.medical}
          onChange={handleChange}
        />

        <button type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-red-700 transition-all">
          Submit Registration
        </button>
      </form>
    </div>
  );
}
