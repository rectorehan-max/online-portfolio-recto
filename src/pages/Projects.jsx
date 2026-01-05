import { Link } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="mx-10 my-10 py-10 font-mono">
      <h2 className="text-3xl text-[#7aa2f7] hover:font-bold mb-8">
        Projects:
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="shrink-0 w-64 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={project.thumbnail}
                className="w-full h-60 object-cover"
                alt={project.title}
              />
            </div>

            <h2 className="mt-3 font-semibold text-lg text-center text-[#c0caf5] hover:text-[#7aa2f7] transition-colors">
              {project.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
