import React from "react";
import Slider from "react-slick";
import img from "../../assets/testimonial10.jpeg"
import img1 from "../../assets/testimonial11.webp"
import img2 from "../../assets/testimonial12.jpeg"
import img3 from "../../assets/testimonial12.jpeg"
const TestimonialData = [
  {
    id: 1,
    name: "PARITOSH",
    text: "I recently purchased the CoolAir Pro Cooler, and it has completely transformed my summer experience! The cooling effect is instant, and it’s surprisingly energy-efficient. I love how quiet it runs, allowing me to enjoy my evenings without any distractions. Plus, the sleek design fits perfectly in my living room. Highly recommend it to anyone looking for relief from the heat!",
    img: img,
  },
  {
    id: 2,
    name: "MAHENDRA",
    text: "The CrystalView LED TV has taken my movie nights to the next level! The picture quality is absolutely stunning, with vibrant colors and deep blacks that make everything come to life. The smart features are easy to navigate, and I love streaming my favorite shows without any hassle. It’s definitely worth the investment, and I couldn’t be happier!",
    img: img1,
  },
  {
    id: 3,
    name: "AJAY",
    text: "I upgraded to the BreezeMaster Ceiling Fan, and it’s made such a difference in my home! The airflow is powerful yet gentle, keeping my space cool without the annoying noise of traditional fans. I appreciate the modern design and the energy efficiency. It’s stylish and functional, making it a perfect addition to my living room!",
    img: img2,
  },
  {
    id: 5,
    name: "VIRAT",
    text: "As a family, we decided to invest in several new appliances: the AirCooler, UltraHD LED TV, and a high-speed ceiling fan. Each product has exceeded our expectations! The cooler keeps us comfortable during hot days, the TV delivers exceptional clarity for movie nights, and the fan creates a perfect breeze throughout our home. I highly recommend these appliances for anyone looking to enhance their living experience! ",
    img: "https://t3.ftcdn.net/jpg/08/20/91/48/360_F_820914818_u7tA92GXyZvsJyfVWlR86CWu6QEmL9oF.jpg",
  },
];

export default function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-red-600">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            WITH OUR INOVATIVE DESIGNS, CRAFTSMANSHIP, CREATIVITY AND QUALITY, WE HAVE WON THE TRUST AMONG OUR CUSTOMERS
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-red-200 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};


