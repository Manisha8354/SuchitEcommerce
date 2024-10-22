import React, { useState } from 'react';

export default function Distributer() {
  const [checked, setChecked] = useState(false);
  const [selectedUT, setSelectedUT] = useState('');
  const [cities, setCities] = useState([]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  // Mapping Union Territories to their cities
  const utCities = {
    "Andaman and Nicobar Islands": ["Port Blair", "Havelock Island", "Neil Island"],
    "Chandigarh": ["Chandigarh"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Dadra", "Daman"],
    "Lakshadweep": ["Kavaratti", "Minicoy", "Agatti"],
    "Delhi": ["New Delhi", "Dwarka", "Vasant Kunj"],
    "Puducherry": ["Puducherry", "Auroville", "Karaikal"],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Gulmarg"],
    "Ladakh": ["Leh", "Kargil"],
  };

  const handleUTChange = (event) => {
    const ut = event.target.value;
    setSelectedUT(ut);
    setCities(utCities[ut] || []);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-5xl mx-auto bg-gray-50 shadow-xl rounded-lg px-6 py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600">New Distributer Enquiry Form</h1>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* State/Union Territory */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select States/Union Territories</label>
            <select
              id="state"
              onChange={handleUTChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">-- Select States/Union Territories --</option>
              {Object.keys(utCities).map((ut, index) => (
                <option key={index} value={ut}>
                  {ut}
                </option>
              ))}
            </select>
          </div>

          {/* City/Town */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select City/Town</label>
            <select
              id="city"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">-- Select City/Town --</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Legal Name of the Firm */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Legal Name of the firm</label>
            <input
              type="text"
              id="firmName"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter legal name"
            />
          </div>

          {/* Ownership of the Firm */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Ownership of the firm</label>
            <select
              id="ownership"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select ownership type</option>
              <option value="Sole Proprietorship"> Proprietorship</option>
              <option value="Private"> Private</option>
              <option value="Partnership">Partnership</option>
              <option value="Cooperative">Cooperative</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Year of Establishment */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Year of Establishment</label>
            <input
              type="number"
              id="establishment"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter year"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter address"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              id="stateAddress"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter state"
            />
          </div>

          {/* Pin Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Pin Code</label>
            <input
              type="number"
              id="pincode"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter pin code"
            />
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile No.</label>
            <input
              type="text"
              id="mobile"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter mobile number"
            />
          </div>

          {/* Email ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email ID</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter email"
            />
          </div>

          {/* Name of Key Contact Person */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name of Key Contact Person</label>
            <input
              type="text"
              id="contactPerson"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter contact person name"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              id="designation"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter designation"
            />
          </div>

          {/* Profile of Current Business */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile of Current Business</label>
            <select
              id="profileBusiness"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="Wholesaler">Wholesaler</option>
              <option value="Distributor">Distributor</option>
              <option value="Retailer">Retailer</option>
              <option value="Manufacturer">None</option>
            </select>
          </div>

          {/* Year of Establishment */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Year of Establishment</label>
            <input
              type="number"
              id="businessEstablishment"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter year of establishment"
            />
          </div>

          {/* Capacity to Invest */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Capacity to Invest (in INR)</label>
            <input
              type="number"
              id="investment"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter amount in INR"
            />
          </div>

          {/* Business Proposal */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Business Proposal</label>
            <textarea
              id="businessProposal"
              rows="4"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Write your proposal here..."
            />
          </div>

          {/* Checkbox */}
          <div className="col-span-2 flex items-center">
            <input
              type="checkbox"
              id="agree"
              checked={checked}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-red-500 border-gray-300 rounded"
            />
            <label htmlFor="agree" className="ml-2 text-gray-700">
              I hereby declare that the above information is correct.
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
