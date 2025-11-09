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
    emergency: "",
    lastDonation: "",
    availability: "Available",
    medical: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Fetch existing donors from localStorage
    const storedDonors = JSON.parse(localStorage.getItem("donors")) || [];

    // ✅ Add new donor data
    storedDonors.push(formData);

    // ✅ Save updated list back to localStorage
    localStorage.setItem("donors", JSON.stringify(storedDonors));

    alert("✅ Donor Registered Successfully!");

    // ✅ Reset form
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
      emergency: "",
      lastDonation: "",
      availability: "Available",
      medical: "",
    });
  };

  return (
    <div className="flex justify-center w-full min-h-[calc(100vh-70px)] bg-gradient-to-r from-red-700 to-red-500 pt-24 pb-12 px-6">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-4xl space-y-6"
      >
        <h2 className="text-4xl font-extrabold text-red-600 text-center mb-6">
          Register as Blood Donor
        </h2>

        {/* GRID FORM FIELDS */}
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

          <input name="emergency" type="tel" placeholder="Emergency Contact"
            className="p-3 border rounded-xl" value={formData.emergency} onChange={handleChange} required />

          <input name="city" type="text" placeholder="City / Area"
            className="p-3 border rounded-xl" value={formData.city} onChange={handleChange} required />

          <input name="pincode" type="text" placeholder="Pincode"
            className="p-3 border rounded-xl" value={formData.pincode} onChange={handleChange} required />

          <input name="lastDonation" type="date"
            className="p-3 border rounded-xl" value={formData.lastDonation} onChange={handleChange} />

          <select name="availability" className="p-3 border rounded-xl"
            value={formData.availability} onChange={handleChange}>
            <option value="Available">✅ Available to Donate</option>
            <option value="Unavailable">⛔ Temporarily Unavailable</option>
          </select>
        </div>

        {/* MEDICAL CONDITIONS */}
        <textarea
          name="medical"
          placeholder="Any medical conditions or medications? (optional)"
          className="w-full p-4 border rounded-xl"
          value={formData.medical}
          onChange={handleChange}
        />

        {/* SUBMIT BUTTON */}
        <button type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-red-700 transition-all">
          Submit Registration
        </button>
      </form>
    </div>
  );
}
