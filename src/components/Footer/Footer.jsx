import React, { useEffect, useState } from "react";
import footerLogo from "../../assets/logo.jpeg";
import Banner from "../../assets/website/cropped_footer_pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope, // Importing the email icon
} from "react-icons/fa";
import axios from "axios";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function Footer() {
  const [category, setCategory] = useState([]);
  async function getCategory() {
    let result = await axios.get('https://actl.co.in/suchit/categoryget')
    setCategory(result.data)
  }
  useEffect(() => {
    getCategory()
  }, [])
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
          <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
  <img
    src={footerLogo}
    alt="Footer Logo"
    className="max-w-[250px]" // Increased the width here
  />
</h1>


            <p>
              © <a href="https://techxpert.in/" className="underline">Techxpert.in</a> | All rights reserved
            </p>
          </div>

          {/* Footer as */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* Section 1 - Important as */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Information
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/">Home</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/about">About Us</a>
                  </li>
                  {category &&
                    category.map((item) => (
                      <li>
                        <a href={`/view/${item.categoryName}`} className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">{item.categoryName}</a>
                      </li>
                    ))
                  }
                
                  
                </ul>
              </div>
            </div>

            {/* Section 2 - Other as */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Support
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/shipping">Shipping And Delivery</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/return">Cancellation & Refund Policy</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/terms">Terms And Conditions</a>
                  </li>


                </ul>
              </div>
            </div>

            {/* Section 3 - Social as & Contact */}
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Connect with us
                </h1>
                <div className="flex items-center gap-3 mt-6">
                  <a href="mailto:info@wisetechappliances.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-3xl" /> {/* Email icon */}
                  </a>
                  <a
                    href="https://www.instagram.com/wisetechappliances/profilecard/?igsh=bmhoem4zdzl1ZnY0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/AszdpbLYUYzsRN68/?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-3xl" />
                  </a>
                </div>
                <div className="mt-6">
                <div className="flex flex-col items-start gap-1">
  
                <h1 className="text-xl font-bold flex items-center gap-2">
  <FaLocationArrow /> {/* Icon aligned to the left */}
  Wisetech Appliances
</h1>
<p>Kha 118 KA, Deoria Khurd, Amity Green City, Near Amity University, Gomti Nagar Extention, Lucknow (226028) Uttar Pradesh, INDIA</p>

</div>

                  <div className="flex items-center gap-3 mt-3">
  <a href="tel:+919621517568" className="flex items-center gap-3">
    <FaMobileAlt />
    <p>+91 9621517568</p>
  </a>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}