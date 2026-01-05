import { Link } from "react-router-dom"
import skills from "../data/skill";

const Skills = () => {
  return (
    <section className="font-mono my-10 py-10 text-center">
      <h2 className="text-3xl font mb-10 text-[#7aa2f7] hover:font-bold">My Skills</h2>

      <div className="flex flex-wrap justify-center gap-8 mx-10">
        { skills.map((skill) => (
          <Link
            key={ skill.id }
            to={ `/skills/${ skill.id }` }
            className="w-40 bg-[#3a3b55]/60 backdrop-blur-md rounded-xl p-4 shadow-md hover:scale-105 transform-view"
          >
            <img
              src={ skill.image }
              alt={ skill.name }
              className="w-auto h-16 mx-auto mb-4"
            />

            <h3 className="font-bold mb-2 text-gray-700">{ skill.name }</h3>

            <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
              <div
                className="bg-blue-800 h-2 rounded-full transition-all"
                style={{ width: `${ skill.knowledge }%` }}
              />
            </div>

            <p className="text-sm text-gray-700">
              { skill.knowledge }%
            </p>
            
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Skills;
