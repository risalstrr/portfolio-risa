import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "../public/assets/navLogo.png";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full shadow-xl h-20 z-[100] bg-[#fefefe]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={NavLogo} width={80} height={80} />
        <div className="flex flex-col">
          <ul className="hidden md:flex gap-10 uppercase text-sm">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/#experiences">
              <li>Experiences</li>
            </Link>
            <Link href="/#skills">
              <li>Skills</li>
            </Link>
            <Link href="/#projects">
              <li>Projects</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 p-8 ease-in duration-500 top-0 bg-[#fefefe] h-screen w-[60%] md:w-[50%] sm:w-[50%]"
              : "fixed left-[-100%] ease-in p-8 duration-500 top-0"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image src="/../public/assets/navLogo.png" width={80} height={80} />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-1"
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className="border-b py-4">
            <p>
              Hi! I'm <span className="font-extrabold">Risa,</span>
            </p>
            <p className="font-semibold text-gray-500">
              Computer Science Student
            </p>
            <p className="font-semibold text-gray-500">
              at University of Indonesia
            </p>
          </div>
          <div>
            <ul>
              <Link href="/">
                <li className="py-4">Home</li>
              </Link>
              <Link href="/#experiences">
                <li className="py-4">Experiences</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4">Projects</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
