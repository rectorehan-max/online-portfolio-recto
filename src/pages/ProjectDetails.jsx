import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="p-8 text-red-500">Project not found</div>;

  return (
    <div className="py-30">      
        <button
          onClick={ () => navigate(-1) } 
          className="fixed bottom-15 text-white "
        >
          Back
        </button>
      <div className="font-mono flex flex-col items-center text-center">

        <h1 className="text-3xl font-bold mb-4">{ project.title }</h1>

        <div className="flex gap-4 mb-4">
          <img
            src={ project.thumbnail }
            className="w-1/2 max-w-md hover:scale-150 transition-transform rounded-lg"
          />
          <img
            src={ project.image }
            className="w-1/2 max-w-md hover:scale-150 transition-transform rounded-lg"
          />
        </div>

        <p>{ project.description }</p>
      </div>
    </div>

  );
};

export default ProjectDetail;
