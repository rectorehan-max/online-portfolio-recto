import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full shadow-md z-50 font-mono text-[#c0caf5] bg-[#1a1b26] dark:text-[#1a1b26]  dark:bg-[#c0caf5]">
      <div className="max-w-7xl mx-auto px-1 py-3 flex justify-between items-center">
        <p className="hover:font-bold">Online Portfolio</p>

        <ul className="flex gap-6 font-medium">
          <li className=" cursor-pointer hover:text-2xl">
            <Link to="/">
              Home
            </Link>
          </li>
          |

          <li className=" cursor-pointer">
            <Link to="/projects" className="hover:text-2xl">
              Projects
            </Link>
          </li>
          |

          <li className=" cursor-pointer">
            <Link to="/skills" className="hover:text-2xl">
              Skills
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;  