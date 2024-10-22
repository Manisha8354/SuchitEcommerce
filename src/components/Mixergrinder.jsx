import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

// Static Data
const tvProducts = [
  {
    productCode: 'TV001',
    productTitle: 'Samsung Smart TV',
    productPrice: 50000,
    productDiscount: 10,
    productImages: ['tv1-1.jpg', 'tv1-2.jpg'],
  },
  {
    productCode: 'TV002',
    productTitle: 'Sony Bravia OLED',
    productPrice: 80000,
    productDiscount: 15,
    productImages: ['tv2-1.jpg', 'tv2-2.jpg'],
  },
  {
    productCode: 'TV003',
    productTitle: 'LG 4K Ultra HD TV',
    productPrice: 60000,
    productDiscount: 12,
    productImages: ['tv3-1.jpg', 'tv3-2.jpg'],
  },
  {
    productCode: 'TV001',
    productTitle: 'Samsung Smart TV',
    productPrice: 50000,
    productDiscount: 10,
    productImages: ['tv1-1.jpg', 'tv1-2.jpg'],
  },
  {
    productCode: 'TV002',
    productTitle: 'Sony Bravia OLED',
    productPrice: 80000,
    productDiscount: 15,
    productImages: ['tv2-1.jpg', 'tv2-2.jpg'],
  },
  {
    productCode: 'TV003',
    productTitle: 'LG 4K Ultra HD TV',
    productPrice: 60000,
    productDiscount: 12,
    productImages: ['tv3-1.jpg', 'tv3-2.jpg'],
  },
];

// Add to Cart function (mock)
const addCart = (product) => {
  console.log(`Added ${product.productTitle} to Cart`);
};

// Add to Wishlist function (mock)
const addWish = (product) => {
  console.log(`Added ${product.productTitle} to Wishlist`);
};

const Mixergrinder = () => {
  return (
    <div className="container mx-auto mt-[50px]">
      <div className="flex flex-wrap justify-start gap-8">
        {tvProducts.map((product, index) => (
          <div 
            key={index} 
            className="border w-full sm:w-[48%] md:w-[48%] lg:w-[32%] xl:w-[25%] p-4 rounded-lg shadow-lg bg-white"
          >
            {/* Link to product detail page */}
            <Link to={`/productpage/${product.productCode}`}>
              {/* Swiper component to show product images */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}
              >
                <style>
                  {`
                    .swiper-button-next, .swiper-button-prev {
                      color: gray;
                    }
                    .swiper-button-next::after, .swiper-button-prev::after {
                      font-size: 20px;
                    }
                  `}
                </style>
                {product.productImages.map((slide, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <img
                      src="https://www.maharajawhiteline.com/assests/product-images/enlarge-image/5200000970.jpg"
                      alt={`Slide ${slideIndex}`}
                      className="w-full h-72 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Product title and pricing */}
              <h2 className="text-lg font-semibold mt-2">{product.productTitle}</h2>
              <p className="text-red-500">
                {Math.ceil(product.productPrice - (product.productPrice * product.productDiscount) / 100)} Rs.
              </p>
              <p className="line-through text-gray-400">{product.productPrice} Rs.</p>
            </Link>
            {/* Add to Cart and Wishlist Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={() => addCart(product)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-2 text-sm rounded-lg w-full sm:w-auto"
              >
                Add to Cart
              </button>
              <button
                onClick={() => addWish(product)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 text-sm rounded-lg w-full sm:w-auto"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mixergrinder;
