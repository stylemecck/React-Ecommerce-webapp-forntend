import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import AriaSkirted from "../../assets/women/topDress.webp";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  { id: 1, img: Img1, title: "Women Ethnic", rating: 5.0, color: "White", description: "Elegant ethnic wear for special occasions.", delay: 0 },
  { id: 2, img: Img2, title: "Women Western", rating: 4.5, color: "Red", description: "Trendy western wear to elevate your style.", delay: 200 },
  { id: 3, img: Img3, title: "Goggles", rating: 4.7, color: "Brown", description: "Stylish goggles to complete your look.", delay: 400 },
  { id: 4, img: Img4, title: "Printed T-Shirt", rating: 4.4, color: "Yellow", description: "Comfortable and trendy printed t-shirts.", delay: 600 },
  { id: 5, img: Img2, title: "Fashion T-Shirt", rating: 4.5, color: "Pink", description: "Casual and stylish fashion t-shirts.", delay: 800 },
  { id: 6, img: Img1, title: "Women Ethnic", rating: 5.0, color: "White", description: "Elegant ethnic wear for special occasions.", delay: 1000 },
  { id: 7, img: Img2, title: "Women Western", rating: 4.5, color: "Red", description: "Trendy western wear to elevate your style.", delay: 1200 },
  { id: 8, img: Img3, title: "Goggles", rating: 4.7, color: "Brown", description: "Stylish goggles to complete your look.", delay: 1400 },
  { id: 9, img: Img4, title: "Printed T-Shirt", rating: 4.4, color: "Yellow", description: "Comfortable and trendy printed t-shirts.", delay: 1600 },
  { id: 10, img: AriaSkirted, title: "Aria Skirted One Piece", rating: 4.5, color: "Island Paisley", description: "Casual and stylish fashion t-shirts.", delay: 1800 },
];

const Products = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      once: false, // Allows repeated animations on scroll
      mirror: true, // Enables fade-out when scrolling up
    });
  }, []);

  return (
    <section className="mb-16 mt-14">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div data-aos="fade-down" className="max-w-lg mx-auto mb-10 text-center">
          <p className="text-sm text-[#4263eb] font-medium">🔥 Top Selling Products</p>
          <h1 className="text-4xl font-bold text-orange-400">Trending Now</h1>
          <p className="mt-2 text-sm text-gray-500">
            Discover the latest fashion trends with our best-selling products, hand-picked for you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center lg:px-24">
          {ProductsData.map(({ id, img, title, rating, color, description, delay }) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={delay}
              className="relative flex flex-col items-center w-48 p-4 bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg h-80 group"
            >
              <div className="relative w-40 h-40 sm:w-40 sm:h-40">
                <img src={img} alt={title} className="object-cover w-full h-full rounded-md" />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/10 bg-opacity-40 backdrop-blur-md group-hover:opacity-100">
                  <div className="flex items-center gap-1 text-lg text-yellow-400">
                    <FaStar />
                    <span className="font-medium text-white">{rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex-grow mt-3 ">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-500">{color}</p>
                <p className="mt-1 text-xs text-gray-600">{description}</p>
              </div>
              <button className="mt-3 px-4 py-1 text-white font-semibold rounded-lg bg-[#4263eb] hover:bg-[#314bb0] transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button
            data-aos="fade"
            className="px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-[#4263eb] to-[#314bb0] hover:shadow-md transition"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
