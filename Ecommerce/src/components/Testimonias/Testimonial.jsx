import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Img4 from "../../assets/women/women4.jpg";
import { image } from "framer-motion/client";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

const userReviews = [
  {
    image: Img4,
    name: "John Doe",
    review: "Great product! Highly recommend.",
  },
]

  return (
    <div className="mb-16">
      <div
        data-aos="fade-down"
        className="flex flex-col items-center justify-center w-full py-10"
      >
        <h1 className="text-4xl font-bold text-orange-400">Testimonial</h1>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-wrap items-center justify-center gap-6"
      >
        
        <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md w-96 rounded-xl">
          <img src={Img4} className="w-24 h-24 rounded-full" alt="Customer" />
          <h1 className="mt-4 text-xl font-bold text-center text-black">
            What Our Customers Say
          </h1>
          <p className="mt-2 text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default Testimonial;
