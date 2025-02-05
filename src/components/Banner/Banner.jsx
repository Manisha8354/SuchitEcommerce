import React, { useState, useEffect } from "react";
import BannerImg1 from "../../assets/suchit/blog3.webp";
import BannerImg2 from "../../assets/suchit/cooler.jpeg";
import BannerImg3 from "../../assets/suchit/blog.png";
import BannerImg4 from "../../assets/suchit/blog2.jpeg";
import { Link } from "react-router-dom";
export default function Banner() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: BannerImg1,
      data: "Quality Products",
      content: {
        title: "Efficient Cooling Solutions",
        description: "Discover our range of advanced coolers designed to keep you cool in the hottest conditions, providing powerful cooling while being energy efficient.",
        link: "/blog/quality-products", // Link for Read More button
      },
    },
    {
      id: 2,
      image: BannerImg2,
      data: "Fast Delivery",
      content: {
        title: "Slim & Stylish Design for Modern Homes",
        description: "Our ultra-slim LED TVs are designed to blend effortlessly with modern home décor, adding style while saving space.",
        link: "/blog/fast-delivery",
      },
    },
    {
      id: 3,
      image: BannerImg3,
      data: "Easy Payment Method",
      content: {
        title: "Silent Operation for a Peaceful Environment",
        description: "Enjoy a quiet, peaceful environment with our noise-free fans, perfect for homes, offices, and bedrooms."

,
        link: "/blog/easy-payment",
      },
    },
    {
      id: 4,
      image: BannerImg4,
      data: "Get Offers",
      content: {
        title: "Stylish Designs to Complement Your Home Décor",
        description: "Our fans don’t just keep you cool—they also add a touch of style to your home with their modern, sleek designs.",
        link: "/blog/get-offers",
      },
    },
  ];

  // Get the number of visible cards based on screen width
  const getVisibleCards = () => {
    if (window.innerWidth < 768) return 1; // Mobile: 1 card
    if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (cards.length - visibleCards + 1)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards, cards.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-[550px] flex flex-col justify-center items-center py-12 sm:py-0">
  {/* Blogs Heading */}
  <h1 className="text-4xl font-bold mb-8">Blogs</h1>

  <div className="w-full md:w-3/5 mb-8 md:mb-0 overflow-hidden py-3 mt-12">
    {/* Sliding cards */}
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
    >
      {cards.map((card, index) => (
        <Link
          key={card.id}
          to="blogmore" // Navigate to blog detail page when clicked
          className={`relative w-full h-[450px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden flex-shrink-0 transform hover:scale-105 transition-transform duration-300 ease-in-out ${index !== cards.length - 1 ? 'mr-4' : ''}`}
          style={{ flex: `0 0 ${100 / visibleCards}%` }}
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img src={card.image} alt={`Card ${card.id}`} className="w-full h-full object-cover" />

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4 text-center z-10 fade-in">
            <h2 className="text-2xl font-semibold">{card.content.title}</h2>
            <p className="mt-2 text-sm">{card.content.description}</p>
            {/* Read More Button */}
            <span className="mt-4 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-500 transition-colors duration-300">
              Read More
            </span>
          </div>

          {/* Data shown when hovered */}
          {hoveredCard === card.id && (
            <div className="absolute inset-0 bg-black/60 flex items-end justify-center text-white p-4 text-center z-10 fade-in">
              {card.data}
            </div>
          )}
        </Link>
      ))}
    </div>

    {/* Dots for Navigation */}
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: Math.max(cards.length - visibleCards + 1, 1) }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleDotClick(index)}
          className={`h-3 w-3 rounded-full transition-colors duration-300 ease-in-out ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
        />
      ))}
    </div>
  </div>
</div>

  );
}
