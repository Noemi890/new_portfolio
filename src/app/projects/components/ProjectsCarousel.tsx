import Image from "next/image";
import data from "../../data/data.json";

const ProjectsCarousel = () => {
  return (
    <>
      <div className="carousel w-full">
        {data.projects.map((proj) => {
          return (
            <div
              id={`slide${proj.id}`}
              key={proj.id}
              className="carousel-item relative w-full"
            >
              <Image
                className="w-full"
                src={proj.image}
                alt={proj.name}
                width={537}
                height={200}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data.projects.map((proj) => {
          return (
            <a
              key={proj.id}
              href={`#slide${proj.id}`}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              {proj.id}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsCarousel;
