import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Terms() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

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
    <>
      <div className="min-h-screen bg-gray-300 p-6 md:p-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300 transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-6 text-center hover:text-blue-600 transition duration-300 ease-in-out">
            Terms & Conditions
          </h1>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
              By accessing or purchasing any product from WiseTech Appliance, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              2. Product Information
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
            WiseTech Appliance strives to provide accurate product information. However, we do not guarantee the accuracy or completeness of product descriptions or other content.
            </p>
          </section>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              3. Pricing and Availability
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
              Prices are subject to change without notice. If a product is listed at an incorrect price, WiseTech Appliance reserves the right to cancel any orders placed.
            </p>
          </section>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              4. Orders and Payments
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
              We accept payments via various secure methods. Upon placing an order, you will receive a confirmation email, but it does not guarantee availability.
            </p>
          </section>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              5. Shipping and Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
              Shipping costs vary depending on destination and weight. We are not responsible for delays due to circumstances beyond our control.
            </p>
          </section>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              6. Warranty and Repairs
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
              All products come with a 2year  limited warranty covering defects in materials or workmanship under normal use.
            </p>
          </section>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              7. Returns and Refunds
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
              Products can be returned within 7 days of receipt if in original condition. Non-returnable items include personalized or clearance products.
            </p>
          </section>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
            WiseTech Appliance is not liable for any indirect or consequential damages arising from product use. Liability is limited to the amount paid for the product.
            </p>
          </section>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              9. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
              These terms are governed by the laws of [your jurisdiction], and disputes will be subject to the courts in [your jurisdiction].
            </p>
          </section>

          <section className="mb-6 group">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition duration-300 ease-in-out">
              10. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
              For questions, contact us at: WiseTech Appliance, Kha 118 KA, Deoria Khurd, Amity Green City,
Near Amity University, Gomti Nagar Extention, Lucknow (226028)
Uttar Pradesh, INDIA,  info@wisetechappliances.com,  +91 9621517568.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
