import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Return() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center animate-fade-in">
            RETURN & CANCELLATION POLICY
          </h1>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            Thank you for choosing WiseTech Appliances for your electric appliance needs. We strive to provide high-quality products and services. However, if for any reason you need to return a product or cancel an order, the following terms apply.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
            1. Return Policy
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 animate-fade-in-up">
            a. Eligibility for Returns
          </h3>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            Products can be returned within 7 days from the date of delivery. Items must be in their original packaging, unused, and in the same condition as when you received them. Non-returnable items include products damaged due to misuse, improper handling, or wear and tear, personalized or custom-made items, and products on clearance or sale (unless defective).
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 animate-fade-in-up">
            b. Return Process
          </h3>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            To initiate a return, please contact our customer service team at +91 9236771155/wisetechappliances@gmail.com and provide your order details and reason for return. Once your return is approved, we will send instructions on how to ship the item back to us. Customers are responsible for return shipping costs unless the item was received damaged or defective. Once we receive and inspect the returned product, we will issue a refund to the original payment method within  5-10 days.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 animate-fade-in-up">
            c. Damaged or Defective Products
          </h3>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            If you receive a damaged or defective product, please contact us within 48 hours of delivery. We will arrange for a replacement, repair, or refund, depending on the availability of the product.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
            2. Cancellation Policy
          </h2>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 animate-fade-in-up">
            a. Order Cancellation
          </h3>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            You can cancel your order before it has been shipped. To cancel your order, please contact us immediately at +91 9236771155/wisetechappliances@gmail.com. Once the order has been shipped, it cannot be canceled, and the return policy will apply.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 animate-fade-in-up">
            b. Cancellation Charges
          </h3>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            If you cancel your order before shipment, there will be no cancellation fee. If the order has already been processed for shipment but not yet delivered, a cancellation fee of 10% may apply to cover handling and processing charges.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 animate-fade-in-up">
            c. Refund for Canceled Orders
          </h3>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            If you cancel an order before shipment, a full refund will be processed within 5 days to the original payment method. If an order is canceled after it has been shipped, you will be refunded the product price after we receive the returned item, minus any applicable shipping and handling charges.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
            3. Exchanges
          </h2>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            Products can be exchanged for a different item of equal or higher value within the return window if the product is in its original condition and packaging. Please contact our customer service team to initiate the process.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
            4. Refund Processing Time
          </h2>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            Refunds will be processed to the original payment method within  5 days once the returned product has been received and inspected. It may take an additional  3-5 days for the refund to reflect in your account depending on your bank or payment provider.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
            5. Shipping for Returns
          </h2>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            Products must be shipped to the return address provided by our customer service team. Please ensure the product is securely packed to prevent damage during return shipping. We recommend using a trackable shipping service to ensure we receive the returned item.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
            6. Exclusions
          </h2>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            Non-returnable products include items that have been damaged due to customer misuse or improper installation. Warranty claims for defects in materials or workmanship should be directed to our warranty service and are separate from the return policy.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900 animate-fade-in-up">
            7. Contact Us
          </h2>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
            For questions or assistance with returns, cancellations, or exchanges, please contact us at:
          </p>
          <p className="text-gray-700 mb-4 transition-all duration-300 hover:text-gray-900">
          WiseTech Appliances <br />
          Kha 118 KA, Deoria Khurd, Amity Green City,
Near Amity University, Gomti Nagar Extention, Lucknow (226028)
Uttar Pradesh, INDIA <br />
<a>wisetechappliances@gmail.com</a> <br />
+91 9236771155

          </p>
        </div>
      </div>
    </div>
  );
}
