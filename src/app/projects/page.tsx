import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsCards from "./components/ProjectsCards";
import ProjectsFooter from "./components/ProjectsFooter";

const Projects = () => {
  return (
    <div className="max-w-full flex items-center h-auto lg:min-h-screen flex-wrap mx-auto justify-center">
      <div className="w-full lg:w-9/12 rounded-lg lg:rounded-r-none shadow-2xl bg-gray-900 opacity-75 mx-6 lg:mx-0">
        <ProjectsHeader />
        <ProjectsCards />
        <ProjectsFooter />
      </div>
    </div>
  );
};

export default Projects;
