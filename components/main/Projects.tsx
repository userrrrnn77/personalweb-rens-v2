import React from "react";
import ProjectsCard from "../sub/ProjectsCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-200">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10">
        <ProjectsCard
          src="/edit2.png"
          title="E-Commerce App"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, inventore vel ullam sunt tempore quaerat enim ducimus, eius natus atque quas facere et eveniet excepturi! Eius deserunt est doloremque et."
          links="#"
          
        />
        <ProjectsCard
          src="/frame11.png"
          title="Coffe Shop App"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, inventore vel ullam sunt tempore quaerat enim ducimus, eius natus atque quas facere et eveniet excepturi! Eius deserunt est doloremque et."
          links="#"
        />
        <ProjectsCard
          src="/WEBSPACE.jpg"
          title="Space Web"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, inventore vel ullam sunt tempore quaerat enim ducimus, eius natus atque quas facere et eveniet excepturi! Eius deserunt est doloremque et."
          links='/'
        />
        <ProjectsCard
          src="/edusityWEB.png"
          title="Edusity Web"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, inventore vel ullam sunt tempore quaerat enim ducimus, eius natus atque quas facere et eveniet excepturi! Eius deserunt est doloremque et."
          links="https://edusity-rens-online.vercel.app"
        />
      </div>
    </div>
  );
};

export default Projects;
