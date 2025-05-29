"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState, useMemo } from "react";

type Projects = {
  desc: string;
  projectUrl?: string;
  projectLinkText?: string;
  name: string;
  lang: string;
  img: string;
};

export const AnimatedProjects = ({
  project,
  autoplay = false,
}: {
  project: Projects[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Generate consistent random rotations for each project
  const rotations = useMemo(() => {
    return project.map(() => Math.floor(Math.random() * 21) - 10);
  }, [project]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % project.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + project.length) % project.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  if (!isClient) {
    return (
      <section id="projects" className="py-3">
      <div className="min-h-screen w-full flex items-center justify-center antialiased px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-8 md:gap-16 lg:gap-20 md:grid-cols-3 w-full max-w-7xl">
          <div className="flex items-center justify-center md:col-span-1">
            <div className="relative h-64 w-full max-w-md sm:h-80 md:h-96 lg:h-[500px] lg:max-w-lg xl:max-w-xl">
              <div className="absolute inset-0 origin-bottom">
                <img
                  src={project[active].img}
                  alt={project[active].name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center py-4 md:py-8 md:col-span-2">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-2">
                {project[active].name}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-neutral-500 mb-6">
                {project[active].lang}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 dark:text-neutral-300 leading-relaxed">
                {project[active].desc}
                </p>
                    {project[active].projectUrl && (
      <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 leading-relaxed">
        <a
          href={project[active].projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          View Project
        </a>
      </p>
                    )}
            </div>
            <div className="flex gap-4 mt-8 md:mt-12">
              <button
                onClick={handlePrev}
                className="group/button flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <IconArrowLeft className="h-6 w-6 sm:h-7 sm:w-7 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <IconArrowRight className="h-6 w-6 sm:h-7 sm:w-7 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }

  return (
    
  <section id="projects" className="py-3">
    <div className="min-h-screen w-full flex items-center justify-center antialiased px-4 sm:px-6 lg:px-8">
      <div className="relative grid grid-cols-1 gap-8 md:gap-16 lg:gap-50 md:grid-cols-3 w-full max-w-7xl">
        <div className="flex items-center justify-center md:col-span-1">
          <div className="relative h-64 w-full max-w-md sm:h-80 md:h-96 lg:h-[500px] lg:max-w-lg xl:max-w-xl">
            <AnimatePresence>
              {project.map((projects, index) => (
                <motion.div
                  key={projects.img}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index],
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index],
                    zIndex: isActive(index)
                      ? 40
                      : project.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotations[index],
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={projects.img}
                    alt={projects.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-center py-4 md:py-8 md:col-span-2">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2">
              {project[active].name}
            </h3>
            <h4 className="text-base sm:text-xl md:text-2xl text-neutral-500 mb-6">
              {project[active].lang}
            </h4>
            <motion.p className="text-lg sm:text-xl md:text-lg lg:text-[1.5rem] text-gray-500 dark:text-neutral-300 leading-relaxed">
              {project[active].desc.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}

              {project[active].projectUrl && (
                <motion.a
                  href={project[active].projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.02 * project[active].desc.split(" ").length }}
                  className="text-blue-600 underline hover:text-blue-900 cursor-pointer"
                >
                  {project[active].projectLinkText || "View Project"}
                </motion.a>
              )}
            </motion.p>


          </motion.div>
          <div className="flex gap-4 mt-8 md:mt-12">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <IconArrowLeft className="h-6 w-6 sm:h-7 sm:w-7 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <IconArrowRight className="h-6 w-6 sm:h-7 sm:w-7 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
            </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};