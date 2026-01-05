import cppLogo from '../assets/cpp_logo.svg';
import javaLogo from '../assets/java_logo.svg';
import pythonLogo from '../assets/python_logo.png';
import sqlLogo from '../assets/sql_logo.png';
import javascriptLogo from '../assets/javascript_logo.png';

const skills = [
    {
        id: 1,
        name: "Java",
        knowledge: 35,
        description: `Java is the first programming language I have learned. In Java, I learned the OOP (Object
                     Oriented Programming) and still occasionally use it.`,
        image: javaLogo
    },

    {
        id: 2,
        name: "C++",
        knowledge: 30,
        description: `I mainly use C++ to use Raylib (graphics library), to try and code games and game engine.
                     coding in C++ made me learn about memory management, pointers and reference which makes 
                     coding fun and sometimes dangerous. Right now, this is my most used programming language. `,
        image: cppLogo
    },

    {
        id: 3,
        name: "Python",
        knowledge: 20,
        description: `Because of it's minimal syntax, Python the is one of the most earliest languages that I have 
                      learned. But complex Python programming is still unfamiliar to me as I don't really use this 
                      language that much.`,
        image: pythonLogo
    },

    {
        id: 4,
        name: "SQL",
        knowledge: 18,
        description: `At first I didn't enjoy performing queries so SQL but overtime, it became enjoyable to me. And 
                      also designing databases by and tackling concepts such as entity relationships, cardinalities is fun.`,
        image: sqlLogo
    },

    {
        id:5,
        name: "JavaScript",
        knowledge: 15,
        description: `This language is fairly new to me so I don't have that much knowledge on it yet. Learning JavaScript
                      means that you will get access to frameworks such a react, vite, vue and other frameworks. So that means
                      that when you learn JavaScript you're also learning html and/or css.`,
        image: javascriptLogo
    },
]

export default skills;