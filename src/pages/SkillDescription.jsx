import { useParams, useNavigate } from "react-router-dom";
import skills from "../data/skill";

const SkillDescription = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const skill = skills.find((s) => s.id === parseInt(id));

    if (!skill) return <div className="text-red-700">Skill not found</div>

    return (
        <div className="my-10">
            <button
                onClick={ () => navigate(-1) }
                className="fixed bottom-15 text-white"
            >
                Back
            </button>
            <section className="flex flex-col items-end px-10">
            <h1 className="text-4xl tracking-wide my-10  text-[#7aa2f7] hover:font-bold">{ skill.name }</h1>
                <div className="flex gap-3 items-center">
                    <div className="text-lg ">
                        { skill.description }
                    </div>
                    <img
                        src={ skill.image }
                        className="w-150 h-130"
                    ></img>

                </div>
            </section>
        </div>
    )
}

export default SkillDescription;

// import { useParams, useNavigate } from "react-router-dom";
// import skills from "../data/skill";

// const SkillDescription = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();  // <-- get navigate function
//   const skill = skills.find((s) => s.id === parseInt(id));

//   if (!skill) return <div className="text-red-700">Skill not found</div>;

//   return (
//     <div>
//       <button
//         onClick={() => navigate(-1)}   // <-- go back to previous page
//         className="mb-5 px-4 y-10 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
//       >
        
//       </button>

//       <section className="flex flex-col items-end px-10">
//         <h1 className="text-4xl tracking-wide my-10 text-[#7aa2f7] hover:font-bold">
//           {skill.name}
//         </h1>
//         <div className="flex gap-3 items-center">
//           <div className="text-lg">{skill.description}</div>
//           <img src={skill.image} className="w-150 h-130" alt={skill.name} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SkillDescription;
