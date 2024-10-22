import React, { useContext, useEffect, useState, useRef } from "react";
import Logo from "../../assets/logo2.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaUser, FaHeart, FaBars, FaBagShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import UserContext from "../../context/UserContext";
import axios from "axios";
import { GiHeartEarrings } from "react-icons/gi";
import { FiChevronDown } from 'react-icons/fi';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Navbar({ handleOrderPopup , setHamburgerVisible, toggleHamburgerMenu}) {
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const servicesDropdown = useRef(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggles dropdown visibility
  };

  const [isOpen, setIsOpen] = useState(false); // Hamburger menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let navigation = useNavigate();
  let { auth, logout } = useContext(UserContext);
  const [inp, setInp] = useState('');
  const [order, setOrder] = useState('');
  const [category, setCategory] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Hide the hamburger menu when "Enter" is pressed
      setHamburgerVisible(false);
    }
  };

  async function getCategory() {
    let result = await axios.get('https://actl.co.in/suchit/categoryget');
    setCategory(result.data);
  }

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (inp) {
      navigation(`/find/${inp}`);
    }
  }, [inp]);

  function handlelogout() {
    logout();
    window.location.reload();
  }

  async function getData() {
    if (auth.username) {
      let user = auth.username.email;
      let result = await axios.get(`https://actl.co.in/suchit/getOrderByEmail/${user}`);
      setOrder(result.data);
    }
  }

  const handleServicesEnter = () => {
    gsap.to(servicesDropdown.current, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' });
};
const handleServicesLeave = () => {
  gsap.to(servicesDropdown.current, { height: 0, opacity: 0, duration: 0.4, ease: 'power2.in' });
};

  useEffect(() => {
    getData();
  }, [auth.username]);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsPortfolioOpen(false); // Close Portfolio when Services is opened
};
const togglePortfolio = () => {
  setIsPortfolioOpen(!isPortfolioOpen);
  setIsServicesOpen(false); // Close Services when Portfolio is opened
};



const handleLinkClick = () => {
  setIsServicesOpen(false); // Close the dropdown
  toggleHamburgerMenu(false); // Close the hamburger menu
};

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-white py-2">
        <div className="container flex justify-between items-center">
          <div>
          <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2 relative">
  <img
    src={Logo}
    alt="Logo"
    className="w-32 top-0 md:w-48 md:h-auto"
  />
</a>

          </div>

          {/* Hamburger Icon */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl text-red-600 dark:text-white"
            >
              <FaBars />
            </button>
          </div>

          {/* Search bar with icons, visible only on larger screens */}
          <div className="hidden sm:flex justify-between items-center gap-4">
            <div className="relative group flex items-center gap-4">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-red-60 dark:border-gray-500 dark:bg-gray-800"
                value={inp}
                onChange={(e) => setInp(e.target.value)}
              />
              {auth.username ? <div className='flex items-center gap-6'><span className='uppercase text-2xl font-bold flex items-center gap-2'> <FaUser className="text-red-600 dark:text-white text-2xl" /> {auth.username.name}</span><button className='p-2 rounded-lg bg-red-600 text-white font-[600]' onClick={handlelogout}>Logout</button></div> : <Link to="/signinsignup" className="p-2 rounded-lg bg-red-600 text-white font-[600]">
                Sign In/Sign Up
              </Link>}
            </div>

            {/* Order button */}
            <Link
              to="/cart"
              className="bg-gradient-to-r from-red-600 to-red-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Cart
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link>
            <Link
              to="/wishlist"
              className="bg-gradient-to-r from-red-600 to-red-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Wishlist
              </span>
              <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link>
            {order.length > 0 ? <Link
              to="/yourorder"
              className="bg-gradient-to-r from-red-600 to-red-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaBagShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link> : ''}
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center py-2">
        <ul className="sm:flex hidden items-center gap-4">
          <Link to='/' className="inline-block px-4 hover:text-red-600 duration-200">Home</Link>
          {category &&
            category.map((item) => (
              <Link to={`/view/${item.categoryName}`} className="inline-block px-4 hover:text-red-600 duration-200">{item.categoryName}</Link>
            ))}
          <Link to='/about' className="inline-block px-4 hover:text-red-600 duration-200">About Us</Link>
          <li className="relative group hover:text-white cursor-pointer transition duration-300 ease-in-out font-serif">
  {/* Bracelets with dropdown icon */}

</li>
          {/* Additional Headings */}
          
          {/* products ki  */}
          <div
  onMouseEnter={handleServicesEnter} // Ensures dropdown stays open when hovering over it
  onMouseLeave={handleServicesLeave} // Ensures dropdown closes when hovering out
>
  <button
    className="text-black hover:text-red-600 font-normal transition duration-200 flex items-center"
    onMouseEnter={handleServicesEnter} // Hover event on the button
    onMouseLeave={handleServicesLeave} // Leave event on the button
  >
    Products
    {/* Dropdown Icon */}
    <FiChevronDown
      className={`ml-2 transform transition-transform duration-300 ${
        isDropdownVisible ? 'rotate-180' : ''
      }`}
    />
  </button>

  <div
    ref={servicesDropdown}
    onMouseEnter={handleServicesEnter} // Keeps the dropdown open on hover
    onMouseLeave={handleServicesLeave} // Closes dropdown on leave
    className={`absolute left-52 mt-2 w-[500px] bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-10 ${
      isDropdownVisible ? 'opacity-100 h-auto' : 'opacity-0 h-0'
    } max-h-[250px] overflow-y-auto`}
  >
    <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg max-h-[200px] overflow-y-auto">
      <div className="space-y-2">
        <Link to="/tvproducts" className="hover:underline">
          <h3 className="font-normal text-red-500">TV</h3>
          <img
            src="https://images.livemint.com/img/2024/07/26/600x338/TV_only_1721991424359_1721991435343.PNG"
            alt="TV"
            className="w-full h-auto rounded-lg hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
      </div>
      <div className="space-y-2">
        <Link to="/aircooler" className="hover:underline">
          <h3 className="font-normal text-red-500">AIR COOLER</h3>
          <img
            src="https://cdn.godrej.com/img/Category/637375072838897273_Air-Cooler-Cat.jpg"
            alt="Air Cooler"
            className="w-full h-auto rounded-lg hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
      </div>
      <div className="space-y-2">
        <Link to="/mixergrinder" className="hover:underline">
          <h3 className="font-normal text-red-500">MIXER GRINDER</h3>
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/k8ytaq80/mixer-grinder-juicer/t/r/m/bajaj-classic-750-watts-mixer-grinder-with-3-jars-high-quality-original-imafqvf9vqqynbv2.jpeg?q=20&crop=false"
            alt="Mixer Grinder"
            className="w-full h-auto rounded-lg hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
      </div>
    </div>
  </div>
</div>


   
          
         
          <Link to='/servicerequest' className="inline-block px-4 hover:text-red-600 duration-200">Service Request</Link>
          

<div className="relative group inline-block">
  {/* Contact Us section */}
  <div className="flex items-center justify-between cursor-pointer">
    Contact Us
    <FiChevronDown className="ml-2 transform transition-transform duration-300 group-hover:rotate-180" />
  </div>

  {/* Dropdown for Contact Us */}
  <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out z-10">
    <li className="px-4 py-2 text-black hover:bg-rose-500 hover:text-white transition duration-300 ease-in-out">
      <Link to="/office"> Office</Link>
    </li>
    <li className="px-4 py-2 text-black hover:bg-rose-500 hover:text-white transition duration-300 ease-in-out">
      <Link to="/distributer">New Distributor Enquiry</Link>
    </li>
    <li className="px-4 py-2 text-black hover:bg-rose-500 hover:text-white transition duration-300 ease-in-out">
      <Link to="/directdealer">New Direct Dealer Enquiry</Link>
    </li>
    <li className="px-4 py-2 text-black hover:bg-rose-500 hover:text-white transition duration-300 ease-in-out">
      <Link to="/career">Career at Wisetech</Link>
    </li>
  </ul>
</div>

        </ul>
      </div>

      {/* Mobile Menu */}
      
      <div
        className={`${isOpen ? "block" : "hidden"
          } sm:hidden bg-white dark:bg-gray-900 p-4 w-full transition-all duration-300`}
      >
        <div className="flex flex-col items-center gap-4">
        <input
      type="text"
      placeholder="search"
      value={inp}
      onChange={(e) => setInp(e.target.value)}
      onKeyDown={handleKeyDown} // Listen for key press
      className="w-full rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-red-600 dark:border-gray-500 dark:bg-gray-800"
    />

          {auth.username ? <div className='flex items-center gap-6'><span className='uppercase text-2xl font-bold flex items-center gap-2'> <FaUser className="text-red-600 dark:text-white text-2xl cursor-pointer" /> {auth.username.name}</span><button className='p-2 rounded-lg bg-red-600 text-white font-[600]' onClick={handlelogout}>Logout</button></div> : <Link to="/signinsignup" onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg bg-red-600 text-white font-[600]">
            Sign In/Sign Up
          </Link>}
          <Link
            to='/cart'
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-red-600 to-red-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
          >
            Cart
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </Link>
          <Link
            to='/wishlist'
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-red-600 to-red-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
          >
            Wishlist
            <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </Link>
          <Link
            to='/yourorder'
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-red-600 to-red-300 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
          >
            Orders
            <FaBagShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </Link>

          <ul className="w-full">
            <Link to="/"
            onClick={() => setIsOpen(!isOpen)}
             className="block w-full text-center hover:bg-red-600 dark:hover:bg-primary/80 duration-300 py-2 text-lg rounded-md">
              Home
            </Link>
            {category &&
              category.map((item) => (
                <Link to={`/view/${item.categoryName}`} className="block w-full text-center hover:bg-red-600 dark:hover:bg-primary/80 duration-300 py-2 text-lg rounded-md">
                  {item.categoryName}
                </Link>
              ))}
            <Link to="/about"
            onClick={() => setIsOpen(!isOpen)}
             className="block w-full text-center hover:bg-red-600 dark:hover:bg-primary/80 duration-300 py-2 text-lg rounded-md">
              About Us
            </Link>
            <div>
      <div className="flex justify-center items-center">
        {/* Button to toggle dropdown */}
        <button
          onClick={toggleServices}
          className="flex items-center justify-center w-full max-w-md px-4 py-2 text-black font-semibold hover:bg-red-100"
        >
          <span>Products</span>
          <ChevronDownIcon
            className={`h-5 w-5 transform transition-transform duration-300 ${
              isServicesOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>

      {/* Dropdown content */}
      <div className={`${isServicesOpen ? 'block' : 'hidden'}`}>
        <Link
          to="/tvproducts"
          onClick={handleLinkClick}
          className="block px-4 py-2 text-black hover:bg-white"
        >
          TV
        </Link>
        <Link
          to="/aircooler"
          onClick={handleLinkClick}
          className="block px-4 py-2 text-black hover:bg-white"
        >
          Air Cooler
        </Link>
        <Link
          to="/mixergrinder"
          onClick={handleLinkClick}
          className="block px-4 py-2 text-black hover:bg-white"
        >
          Mixer Grinder
        </Link>
      </div>
    </div>
            {/* Additional Headings */}
           
           
          
            <Link to='/servicerequest'
            onClick={() => setIsOpen(!isOpen)}
             className="block w-full text-center hover:bg-red-600 dark:hover:bg-primary/80 duration-300 py-2 text-lg rounded-md">
              Service Request
            </Link>
            <div>
                <button
                    onClick={togglePortfolio}
                    className="flex items-center justify-center w-full px-4 py-2 font-semibold text-black hover:bg-white"
                >
                    <span>Contact Us</span>
                    <ChevronDownIcon
                        className={`h-5 w-5 transform transition-transform duration-300 ${isPortfolioOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                </button>
                {/* Dropdown menu for Portfolio */}
                <div className={`${isPortfolioOpen ? 'block' : 'hidden'}`}>
                    <Link to="/office" className="block px-4 py-2 text-black hover:bg-white">Head Office</Link>
                    <Link to="/distributer" className="block px-4 py-2 text-black hover:bg-white">New Distributer Enquiry</Link>
                    <Link to="/directdealer" className="block px-4 py-2 text-black hover:bg-white">New Direct Dealer Enquiry</Link>
                    <Link to="/distributer" className="block px-4 py-2 text-black hover:bg-white">Career at Wisetech</Link>
                </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
