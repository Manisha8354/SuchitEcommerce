import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/website/redpattern.webp";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function Subscribe() {
  return (
    <Link to="/contact" className="block">
      <div
        data-aos="zoom-in"
        className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
        style={BannerImg}
      >
        <div className="container backdrop-blur-sm py-10">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
              &lt; Contact Us
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
