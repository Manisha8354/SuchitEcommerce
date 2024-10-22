import React from 'react';
import { motion } from 'framer-motion';

import AOS from "aos";
import "aos/dist/aos.css";
import img from '../../assets/aboutimage.webp';
import img1 from '../../assets/aboutimage1.webp';
import Testimonials from '../Testimonials/Testimonials';

export default function About() {
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <div className="min-h-screen lg:h-[80vh] transition-all duration-700 ease-in-out shadow-lg bg-gray-100">
                <div className="h-32 flex items-center justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-5xl font-bold text-black mb-4 hover:text-yellow-300 transition duration-300 ease-in-out"
                    >
                        Who We Are
                    </motion.h2>
                </div>

                {/* Container for the content */}
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    
                    {/* Image Section - two images on the left side */}
                    <div className="md:w-1/2 flex flex-col space-y-4 md:space-y-8 overflow-hidden">
                        <motion.img
                            src={img}
                            alt="Electric Appliances 1"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="rounded-lg shadow-lg w-full h-auto max-h-64 object-cover mx-auto md:mx-0"
                        />
                        <motion.img
                            src={img1}
                            alt="Electric Appliances 2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="rounded-lg shadow-lg w-full h-auto max-h-64 object-cover mx-auto md:mx-0"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-3xl md:text-4xl font-bold text-black mb-6"
                        >
                            Welcome to Wisetech Appliances
                        </motion.h1>

                        <div className="space-y-4">
                            {[
                                "Welcome to EWiseTech Appliances, your trusted partner in high-quality and affordable home appliances. We take pride in offering a wide range of electric products designed to make your life easier and more comfortable. From energy-efficient air coolers and high-performance fans to powerful mixers and immersive LED TVs, our products are crafted with precision, ensuring reliability, durability, and customer satisfaction.",

                                "Established in 2021, WiseTech Appliances began with a mission to revolutionize the home appliances market by combining cutting-edge technology with user-friendly designs. Over the years, we’ve grown from a small venture into a household name, catering to millions of satisfied customers across [Country/Region]. Our commitment to quality, innovation, and sustainability has always been at the forefront of our success.",

                                "We offer a broad selection of appliances designed to meet the diverse needs of modern households. Our energy-efficient coolers are perfect for keeping your home cool during hot summer days, maximizing airflow while reducing energy consumption. Our range of fans, from ceiling to pedestal fans, provides powerful airflow and silent operation.",

                                

                                
                            ].map((text, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.6 + index * 0.3 }}
                                    className="text-black leading-relaxed mb-4"
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials/>
        </>
    );
}
