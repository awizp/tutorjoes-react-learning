import { Link } from "react-router";

import { ProjectsArr } from "../pages";

const Projects = () => {
    return (
        <section className="w-full py-5 p-10">
            <title>My Projects | React</title>

            <div
                className="flex flex-col justify-center items-center gap-15"
            >

                <h1 className="text-3xl font-bold">My projects</h1>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
                    {ProjectsArr.map((task, idx) => (
                        <Link
                            key={idx}
                            to={`/${task.title}`}
                            className="w-full text-center border-2 rounded-xl p-3 hover:-translate-y-0.5 transition duration-300 shadow hover:shadow-lg cursor-pointer font-semibold"
                        >
                            {task.title}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;