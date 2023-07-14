import Link from "next/link";

const ProjectsFooter = () => {
  return (
    <div className="mb-5 flex justify-center">
      <Link
        href={"/"}
        className="bg-violet-700 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded-full"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ProjectsFooter;
