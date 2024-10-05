"use client";

import { FaLocationArrow } from "react-icons/fa6"; // Import the FaTimes icon
import { FaTimes, FaGithub } from "react-icons/fa"; 
import { projects } from "@/data";
import { useState } from "react";

// Define the project type for TypeScript
interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  popupImg: string;
  iconLists: string[];
  link: string;
  details?: string; // Optional details field
  technologies: string[];
}

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Function to open the modal
  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Some of my <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 cursor-pointer">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
            key={item.id}
            onClick={() => openModal(item)} // Open modal on click
          >
            <div className="border border-white/[0.1] rounded-2xl p-4 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 overflow-hidden">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    More Details
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-black-100 p-4 sm:p-6 pt-2 rounded-lg w-[90vw] sm:w-11/12 lg:w-3/5 max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Close button in top-right corner
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <FaTimes className="text-2xl" />
            </button> */}

            {/* Reduced gap above the image */}
            <img 
              src={selectedProject.popupImg} 
              alt={selectedProject.title} 
              className="w-full sm:w-3/4 h-auto mb-4 rounded-lg mx-auto" 
            />

            <h2 className="text-lg sm:text-2xl font-bold mb-4">{selectedProject.title}</h2> 
            <p className="text-lg mb-4">{selectedProject.des}</p>

            {/* Additional Project Details */}
            <p className="text-sm text-white-200 mb-4">
              {selectedProject.details || "No additional details available."}
            </p>

            <p className="text-sm font-bold text-white-200">Technologies used:</p>
            <ul className="list-disc ml-5 mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index} className="text-sm text-white-200">
                  {tech}
                </li>
              ))}
            </ul>
            
            <div className="flex w-full mt-4">
              {/* View Project on GitHub Button (2/3 width) */}
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-semibold py-2 px-4 rounded-lg flex items-center justify-center w-2/3 mr-2" // 2/3 width with margin-right
              >
                View Project on GitHub
                <FaGithub className="ml-2" /> {/* Add GitHub icon */}
              </a>

              {/* Close Button (1/3 width) */}
              <button
                onClick={closeModal}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center w-1/3" // 1/3 width
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;