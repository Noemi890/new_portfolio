"use client";
import { Typewriter } from "react-simple-typewriter";

const ProjectsHeader = () => {
  return (
    <h1 className="flex justify-center text-4xl">
      <Typewriter
        loop={1}
        cursor
        typeSpeed={100}
        delaySpeed={1000}
        words={["My projects.."]}
      />
    </h1>
  );
};

export default ProjectsHeader;
