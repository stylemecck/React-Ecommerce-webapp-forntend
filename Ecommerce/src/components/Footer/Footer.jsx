import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white py-10 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="container px-6 mx-auto lg:px-16">
        <div data-aos="zoom-in" className="grid gap-10 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-bold">
              <FiShoppingBag size={30} /> ShopMecck.com
            </h1>
            <p className="mt-3 text-gray-400">
              Discover quality products with the best deals. Your trusted online store.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {Array(2).fill().map((_, idx) => (
              <div key={idx}>
                <h2 className="text-xl font-semibold">Links</h2>
                <ul className="mt-3 space-y-2">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="text-gray-300 hover:text-[#4263eb] transition-transform transform hover:translate-x-1 cursor-pointer"
                    >
                      {link.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social & Contact */}
          <div>
            <h2 className="text-xl font-semibold">Connect With Us</h2>
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="#" className="hover:text-[#4263eb]"><FaInstagram /></a>
              <a href="#" className="hover:text-[#4263eb]"><FaFacebook /></a>
              <a href="#" className="hover:text-[#4263eb]"><FaLinkedin /></a>
            </div>
            <div className="mt-6 space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt /> <span>Patna, Bihar</span>
              </div>
              <div className="flex items-center gap-2">
                <IoCall /> <span>+91 123456789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;