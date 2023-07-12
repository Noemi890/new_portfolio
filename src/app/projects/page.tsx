import ProjectsCarousel from "./components/ProjectsCarousel";

const Projects = () => {
  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto justify-center">
      <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-900 opacity-75 mx-6 lg:mx-0 p-14">
        <ProjectsCarousel />
      </div>
    </div>
  );
};

export default Projects;
