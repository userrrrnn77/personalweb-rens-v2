import { Socials } from "@/constans";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/LogoNavRens.png"
            alt="navlogo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden sm:block text-gray-300 text-sm md:text-base">
            Rens Dev
          </span>
        </a>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4 border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200 text-xs md:text-sm">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
          <div className="flex space-x-2">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={20}
                height={20}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
