import React, { useEffect, useState } from "react";
import Image1 from "../../assets/hero/banner.png";
import Image2 from "../../assets/hero/banner1.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import axios from "axios";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "OUR BESTSELLERS: ",
    description: "UNLEASH YOUR INNER ELEGANCE WITH OUR PRODUCTS THAT ARE HIGH IN DEMAND",
  },
  {
    id: 2,
    img: Image2,
    title: "DISCOVER UNIQUE AND ELEGANT HANDMADE JEWELLERY COLLECTIONS ",
    description: "BY ALANKAR THE ART OF BEADS",
  },
  {
    id: 3,
    img: Image3,
    title: "INDO - WESTERN STATEMENT JEWELLERY",
    description: "GIVING A NEW DEFINITION TO YOUR CONFIDENCE AND BEAUTY ON ALL OCCASIONS OF LIFE",
  },
];

export default function Hero({ handleOrderPopup }) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  const [data, setData] = useState('');

  async function getProfile() {
    try {
      let result = await axios.get('https://actl.co.in/suchit/getbanner') || '';
    //   console.log(result)
      if(result){
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    getProfile();
  }, []);
  // console.log(data)

  return (
  
      
      <div className="w-full  mx-auto">
        <Slider {...settings}>
          { data &&data.map((item) => (
       <img
       src={`https://actl.co.in/suchit_uploads/${item.banner}`}
       alt={`Slide ${item.id}`}
       className="w-full h-40 md:h-96 lg:h-96 object-fit"
     />
          ))}
        </Slider>
      </div>
  );
}
