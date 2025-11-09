export default function Awareness() {
  return (
    <div className="w-full min-h-[calc(100vh-70px)] bg-gradient-to-r from-red-700 to-red-500 text-white px-6 md:px-20 py-24">

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
        Blood Donation Awareness
      </h1>

      {/* SECTION 1 - WHY DONATE */}
      <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">
          Why should you donate blood?
        </h2>
        <p className="text-lg leading-relaxed">
          Every <strong>2 seconds</strong>, someone needs blood. One blood donation can save up to
          <strong> 3 lives</strong>. Your small act of kindness can give someone a second chance
          to live. Blood cannot be manufactured in laboratories—it can only come from donors.
        </p>
      </div>

      {/* SECTION 2 - BENEFITS */}
      <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">
          Benefits of Blood Donation
        </h2>

        <ul className="text-lg space-y-3 list-disc pl-5">
          <li>Reduces the risk of heart attack and certain types of cancer.</li>
          <li>Stimulates fresh blood cell production.</li>
          <li>Helps maintain iron levels in the body.</li>
          <li>You receive a mini health check-up before donating.</li>
          <li>Most importantly – you save lives ❤️</li>
        </ul>
      </div>

      {/* SECTION 3 - ELIGIBILITY */}
      <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">
          Who can donate blood?
        </h2>

        <ul className="text-lg space-y-3 list-disc pl-5">
          <li>Age between 18 to 65 years</li>
          <li>Weight at least 50kg</li>
          <li>Normal hemoglobin levels</li>
          <li>No fever, cold, or ongoing infection</li>
          <li>Last donated at least 90 days ago</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-red-600">
          Who should NOT donate blood?
        </h2>
        <ul className="text-lg space-y-3 list-disc pl-5">
          <li>Pregnant or breastfeeding women</li>
          <li>People with chronic diseases (HIV, Hepatitis B/C)</li>
          <li>People who had recent surgery or major illness</li>
          <li>If recently recovered from COVID or any infection</li>
        </ul>
      </div>

      {/* SECTION 4 - COMPATIBILITY TABLE */}
      <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">
          Blood Group Compatibility
        </h2>

        <table className="w-full border text-center rounded-xl overflow-hidden">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="py-3">Blood Group</th>
              <th className="py-3">Can Donate To</th>
              <th className="py-3">Can Receive From</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50">
            <tr><td>O-</td><td>All Groups (Universal Donor)</td><td>O-</td></tr>
            <tr className="bg-gray-200"><td>O+</td><td>O+, A+, B+, AB+</td><td>O+, O-</td></tr>
            <tr><td>A-</td><td>A-, A+, AB-, AB+</td><td>A-, O-</td></tr>
            <tr className="bg-gray-200"><td>A+</td><td>A+, AB+</td><td>A+, A-, O+, O-</td></tr>
            <tr><td>B-</td><td>B-, B+, AB-, AB+</td><td>B-, O-</td></tr>
            <tr className="bg-gray-200"><td>B+</td><td>B+, AB+</td><td>B+, B-, O+, O-</td></tr>
            <tr><td>AB-</td><td>AB-, AB+</td><td>AB-, A-, B-, O-</td></tr>
            <tr className="bg-gray-200"><td>AB+</td><td>AB+ Only</td><td>All Groups (Universal Receiver)</td></tr>
          </tbody>
        </table>
      </div>

      {/* FAQ SECTION */}
      <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-600 text-center">
          Frequently Asked Questions (FAQ)
        </h2>

        <details className="p-4 border rounded-xl mb-4 cursor-pointer">
          <summary className="font-semibold text-lg">Who can donate blood?</summary>
          <p className="mt-2 text-gray-700">
            Anyone aged 18–65, weighing at least 50kg, and in good health.
          </p>
        </details>

        <details className="p-4 border rounded-xl mb-4 cursor-pointer">
          <summary className="font-semibold text-lg">How often can I donate blood?</summary>
          <p className="mt-2 text-gray-700">
            Every 90 days (3 months) for men and every 120 days for women.
          </p>
        </details>

        <details className="p-4 border rounded-xl mb-4 cursor-pointer">
          <summary className="font-semibold text-lg">Is blood donation safe?</summary>
          <p className="mt-2 text-gray-700">
            Yes. Sterile needles are used once and destroyed immediately.
          </p>
        </details>

        <details className="p-4 border rounded-xl mb-4 cursor-pointer">
          <summary className="font-semibold text-lg">Will I feel weak after donating?</summary>
          <p className="mt-2 text-gray-700">
            No. Most people feel normal after resting 10–15 minutes.
          </p>
        </details>

        <details className="p-4 border rounded-xl cursor-pointer">
          <summary className="font-semibold text-lg">
            Can I donate blood if I have a cold or fever?
          </summary>
          <p className="mt-2 text-gray-700">
            No, wait at least 14 days after symptoms disappear.
          </p>
        </details>
      </div>

      <p className="text-center text-xl mt-10 font-light">
        ❤️ Your blood can be someone's second chance at life.
      </p>
    </div>
  );
}
