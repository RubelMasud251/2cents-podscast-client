"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import logo from "@/public/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleSubMenus = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Array containing navigation items
  const navItems = [
    { link: "/podcast", text: "PodCast", icon: "", submenu: [] },
    { link: "/about", text: "About Me", icon: "", submenu: [] },
    {
      link: "/blogs",
      text: "Blogs",
      icon: <RiArrowDropDownLine size={28} />,
      submenu: [
        { subtext: "Blog 1", subicon: <IoIosArrowBack /> },
        { subtext: "Blog 2", subicon: <IoIosArrowBack /> },
      ],
    },
    { link: "/articles", text: "Media & Awards", icon: "", submenu: [] },
    {
      link: "",
      text: "Channels",
      icon: <RiArrowDropDownLine size={28} />,
      submenu: [
        { subtext: "Channel 1", subicon: <IoIosArrowBack /> },
        { subtext: "Channel 2", subicon: <IoIosArrowBack /> },
      ],
    },
  ];

  return (
    <div className="bg-white container-div flex border-b justify-between items-center h-24 w-full mx-auto  text-white">
      <div className="flex items-center gap-4 w-auto">
        <Link href="/" className="h-12  w-12 rounded-full">
          <Image src={logo} alt="" className="w-full h-full rounded-full" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item, i) => (
          <li key={i} className="nav_link">
            <Link
              href={item.link}
              className="nav-text flex items-start w-full p-4"
            >
              {" "}
              {item.text}
              {item.icon}
            </Link>
            {item.submenu && (
              <ul className="submenu">
                {item.submenu.map((subitem, i) => (
                  <li key={i} className="px-4 py-2">
                    <Link href=""> {subitem.subtext}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="md:flex items-center gap-4  hidden">
        <span className="text-black font-bold">
          <IoSearch size={20} />
        </span>
        <Link href="/contact">
          <li className="nav_link p-4">Contact us</li>
        </Link>
      </div>

      {/* Mobile Navigation Icon */}
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer text-black "
      >
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "absolute md:hidden left-0 right-0  top-24 w-[100%]  bg-[#fff] ease-in-out duration-300"
            : "ease-in-out w-[60%] h-screen duration-300 absolute left-0  top-[-100%]"
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item, i) => (
          <li
            key={i}
            className="text-black border-t py-1 border-gray-200 cursor-pointer mobileMenu-item "
            onClick={() => toggleSubMenus(i)}
          >
            <Link href={item.link} className="flex justify-between py-2 px-4 ">
              {" "}
              {item.text}
              {item.icon}
            </Link>
            {item.submenu && (
              <ul
                className={`${openSubmenus[i] ? "block" : "hidden"}  bg-black `}
              >
                {item.submenu.map((subitem, j) => (
                  <li
                    key={j}
                    className=" border-t border-gray-200 primary_color py-2"
                  >
                    <Link href="" className="py-1 px-8 flex gap-2 items-center">
                      {subitem.subicon}
                      {subitem.subtext}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <Link href="/contact">
          <li className="nav_link px-4 py-2 border-t border-gray-200">
            Contact us
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
