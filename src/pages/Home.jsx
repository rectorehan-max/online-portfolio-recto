import rehanImg from "../assets/rehan.jpg"

const Home = () => {
    return (
        <section id="Home" 
                 className="flex items-center font-mono">
            
            <figure className="px-30 py-30">
                <img 
                    src={ rehanImg }
                    className="w-200 h-200 md:w-140 md:h-140 rounded-full object-cover border-4 border-blue-800 shadow-lg
                               hover:scale-105 transition-transform"
                    alt="Rehan Recto"
                />

            </figure>

            <figcaption className=" mt-6 px-1">
                <h1 className="text-3xl md:text-5xl font-bold">
                    Hello, I'm Rehan Recto!
                </h1>
                
                <p className="text-2xl mt-4">
                    BSCS Student | Aspiring Video Game Developer
                </p>
                
                <p className="text-lg mt-2 max-w-2xl mx-auto">
                    A little about me. I'm a BSCS student passionate about video game
                    development and problem-solving.
                </p>
                
                <p className="text-lg mt-2 max-w-2xl mx-auto">
                    I enjoy learning new technologies and building projects to improve my skills.
                </p>

                <section className="py-10 font-sans font-bold text-white text-lg">
                    <p className="py-5">
                        Click below to view:
                    </p>
                    <div className="flex gap-3">
                        <a 
                            href="https://www.linkedin.com/in/rehan-recto-995621327/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-800 text-white font-bold text-lg px-4 py-2 rounded-full hover:bg-blue-500 transition"
                        >   LinkedIn profile</a>

                        <a 
                            href="https://github.com/rectorehan-max"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-800 text-white font-bold text-lg px-4 py-2 rounded-full hover:bg-blue-500 transition"
                        >  
                        GitHub Profile</a>

                    </div>

                    
                </section>

            </figcaption>
        </section>
    );
}

export default Home;