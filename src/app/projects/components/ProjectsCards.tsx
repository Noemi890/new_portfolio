import Image from "next/image";
import data from "../../data/data.json";
import Link from "next/link";

const ProjectsCards = () => {
  const isLive = (project: string) => {
    if (project === "") return false;
    else return true;
  };

  return (
    <div className="flex flex-wrap justify-evenly my-5 gap-10 mx-5 lg:mx-0">
      {data.projects.map((proj) => {
        return (
          <>
            <div className="card w-96 glass">
              <figure className="mt-5 h-20">
                <Image
                  className="object-cover"
                  src={proj.image}
                  alt={proj.name}
                  width={350}
                  height={0}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{proj.name}</h2>
                <p>{proj.description}</p>
                <div className="card-actions items-center lg:justify-between flex flex-col lg:flex-row">
                  <div
                    className="tooltip tooltip-left lg:tooltip-bottom"
                    data-tip="See repository"
                  >
                    <Link
                      href={proj.repo}
                      target="_blank"
                      className="btn btn-primary btn-sm lg:btn-md"
                    >
                      Check out{" "}
                      <svg
                        className="h-6 w-6"
                        width="800px"
                        height="800px"
                        viewBox="0 0 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>github [#142]</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Dribbble-Light-Preview"
                            transform="translate(-140.000000, -7559.000000)"
                            fill="#000000"
                          >
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              <path
                                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                id="github-[#142]"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Link>
                  </div>
                  <div
                    className="tooltip tooltip-left lg:tooltip-bottom"
                    data-tip="See live project"
                  >
                    <Link
                      href={proj.liveApp}
                      target="_blank"
                      className={`btn btn-primary btn-sm lg:btn-md ${
                        isLive(proj.liveApp)
                          ? ""
                          : "pointer-events-none cursor-not-allowed"
                      }`}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="#000000"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="800px"
                        height="800px"
                        viewBox="0 0 72.611 72.611"
                      >
                        <g>
                          <path
                            d="M67.128,30.823C67.128,13.828,53.305,0,36.307,0c-2.862,0-5.617,0.423-8.247,1.157l-0.062-0.042
		c-0.014,0.021-0.025,0.044-0.04,0.065C15.013,4.831,5.484,16.723,5.484,30.821c0,6.211,1.862,11.991,5.033,16.831H6.934v24.96
		h58.748v-24.96h-3.581C65.275,42.816,67.128,37.034,67.128,30.823z M64.062,29.332H52.953c-0.109-3.312-0.483-6.568-1.149-9.729
		h9.952C63.086,22.601,63.882,25.886,64.062,29.332z M60.191,16.605h-9.125c-1.115-4.104-2.68-8.033-4.724-11.715
		C52.159,7.155,57.022,11.31,60.191,16.605z M37.805,3.069c1.45,0.078,2.876,0.238,4.264,0.533c2.586,4.01,4.575,8.378,5.912,13.005
		H37.805V3.069L37.805,3.069z M37.805,19.603h10.946c0.708,3.156,1.1,6.409,1.219,9.729H37.807v-9.729H37.805z M37.805,32.318
		h12.189c-0.062,3.312-0.405,6.569-1.062,9.731H37.805V32.318z M37.805,45.042h10.406c-0.244,0.881-0.522,1.747-0.81,2.614h-9.597
		V45.042z M29.902,3.763c1.589-0.373,3.229-0.606,4.91-0.695v13.538H24.406C25.635,12.062,27.48,7.743,29.902,3.763z M22.62,29.332
		c0.062-3.31,0.408-6.568,1.063-9.729h11.129v9.729H22.62z M34.812,32.318v9.731H23.864c-0.705-3.157-1.097-6.413-1.215-9.731
		H34.812z M25.705,5.106c-1.899,3.627-3.359,7.486-4.379,11.503h-8.904C15.488,11.483,20.134,7.407,25.705,5.106z M10.858,19.603
		h9.787c-0.619,3.169-0.958,6.423-1.021,9.729H8.549C8.735,25.886,9.53,22.601,10.858,19.603z M8.551,32.318H19.66
		c0.11,3.314,0.484,6.569,1.152,9.731H10.86C9.53,39.048,8.735,35.769,8.551,32.318z M21.55,45.042
		c0.241,0.881,0.509,1.747,0.792,2.614h-8.12c-0.64-0.84-1.252-1.704-1.798-2.614H21.55z M25,66.822v1.455H13.5V51.988h1.696h1.705
		v13.388H25V66.822z M24.635,45.042H34.81v2.614h-9.317C25.191,46.789,24.889,45.928,24.635,45.042z M29.801,68.277h-1.696H26.4
		V51.988h1.696h1.705V68.277z M39.757,68.277h-1.616h-1.617l-5.517-16.289h1.806h1.808l3.579,12.427l3.567-12.427h1.747h1.762
		L39.757,68.277z M59.114,66.822v1.455H46.756V51.988H58.74v1.437v1.456h-8.586v3.455h7.963v1.396v1.405h-7.963v4.242h8.965v1.442
		H59.114z M58.396,47.656h-7.849c0.262-0.867,0.516-1.733,0.741-2.614h8.903C59.646,45.955,59.034,46.816,58.396,47.656z
		 M51.968,42.05c0.618-3.167,0.956-6.424,1.02-9.731h11.074c-0.18,3.448-0.976,6.727-2.306,9.731H51.968z"
                          />
                        </g>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProjectsCards;
