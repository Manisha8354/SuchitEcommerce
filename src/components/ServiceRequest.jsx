import React, { useState } from 'react';

export default function ServiceRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    product: '',
    serialNumber: '', // Added field for Product Serial Number
    state: '',
    city: '',
    pincode: '',
    address: '',
    purchaseDate: '',
    modeOfPurchase: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-5xl mx-auto bg-gray-50 shadow-xl rounded-lg px-6 py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600">REGISTER COMPLAINT</h1>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile*</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Product Purchased</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Select Product</option>
              <option>Cooler</option>
              <option>TV</option>
              <option>Fan</option>
            </select>
          </div>

          {/* Added field for Product Serial Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Serial Number*</label>
            <input
              type="text"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Select State</option>
              <option>Uttar Pradesh</option>
              <option>Delhi</option>
              <option>Maharashtra</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Select City</option>
              <option>Lucknow</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pincode*</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address*</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Purchase</label>
            <input
              type="date"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Mode of Purchase</label>
            <select
              name="modeOfPurchase"
              value={formData.modeOfPurchase}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Online</option>
              <option>Retail Store</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="4"
            ></textarea>
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700"
          >
            Submit Complaint
          </button>
        </div>
      </div>
    </div>
  );
}
