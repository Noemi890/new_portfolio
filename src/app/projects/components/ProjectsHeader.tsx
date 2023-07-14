"use client";
import { Typewriter } from "react-simple-typewriter";

const ProjectsHeader = () => {
  return (
    <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white mt-5">
      <Typewriter
        loop={1}
        cursor
        typeSpeed={100}
        delaySpeed={1000}
        words={["My projects"]}
      />
    </h1>
  );
};

export default ProjectsHeader;
