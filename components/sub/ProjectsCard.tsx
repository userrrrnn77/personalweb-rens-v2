import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  links: string;
}

const ProjectsCard = ({ src, title, description, links }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 mb-2">{description}</p>
        <a href={links} className="mt-2">
          <button className="py-1 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] hover:cursor-pointer">
            Try It
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
