import React from 'react';

const Office = () => {
  return (
    <div className="bg-white text-black min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-maroon mb-10">Office</h1>

        {/* Contact Details and Address Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-5 text-red-600">Contact Information</h2>
            <p className="text-lg mb-2"><strong>Landline Number:</strong> 0522-3648827</p>
            <p className="text-lg mb-2"><strong>Mobile Number:</strong> 9621517568</p>
            <p className="text-lg mb-2"><strong>Toll-Free Number:</strong> +91 9236771155</p>
            <p className="text-lg mb-2"><strong>Email 1:</strong> <a href="mailto:info@wisetechappliances.com" className="text-red-500 hover:underline">info@wisetechappliances.com</a></p>
            <p className="text-lg mb-2"><strong>Email 2:</strong> <a href="mailto:wisetechappliances@gmail.com" className="text-red-500 hover:underline">wisetechappliances@gmail.com</a></p>
          </div>

          {/* Office Address */}
          <div>
            <h2 className="text-2xl font-bold mb-5 text-red-600">Office Address</h2>
            <p className="text-lg mb-2">
              WiseTech Appliances <br />
              Kha 118 KA, Deoria Khurd, Amity Green City, <br />
              Near Amity University, Gomti Nagar Extension, <br />
              Lucknow (226028), Uttar Pradesh, INDIA
            </p>
          </div>
        </div>

        {/* Full-Width Map Section */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden w-full">
          <iframe
            src="https://maps.google.com/maps?q=26.834627151489258,81.05420684814453&z=17&hl=en&output=embed"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Office;
