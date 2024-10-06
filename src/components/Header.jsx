"use client";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import { BsPersonExclamation } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import logo from "@/assets/furniro.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto  py-6 flex items-center justify-between ">
        <Link href="/">
          <div>
            <img src={logo.src} alt="Furniro" className="w-[180px] h-auto" />{" "}
            {/* Use logo.src to access the image */}
          </div>
        </Link>
        <div className={`nav__collect flex gap-3 ${isMenuOpen ? "show" : ""}`}>
          <div className="flex items-center lg:gap-[75px] md:gap-[50px] sm:gap-9 gap-3">
            <Link
              className="text-[16px] font-[500] text-[#000000]"
              href="/shop"
            >
              Shop
            </Link>
            <Link
              className="text-[16px] font-[500] text-[#000000]"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-[16px] font-[500] text-[#000000]"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-[16px] font-[500] text-[#000000]"
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="flex lg:gap-[50px] md:gap-[40px] sm:gap-[30px] gap-3">
          <BsPersonExclamation className="text-black" />
          <GoSearch className="text-black" />
          <FaRegHeart className="text-black" />
          <FiShoppingCart className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default Header;
