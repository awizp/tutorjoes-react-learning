import { Link } from "react-router";

const HeroPage = () => {
    return (
        <section className="w-full py-5 pb-8">
            <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-20 container mx-auto px-3 md:px-0">
                <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-2">

                    {/* react strip */}
                    <div className="w-full md:rotate-270 flex justify-center gap-2 items-center mb-15 md:mb-0">
                        <p className="font-semibold text-sm text-gray">2026</p>
                        <div className="w-full h-0.5 rounded-full bg-gray flex md:shrink-0"></div>
                        <p className="font-semibold text-sm text-gray text-nowrap">
                            React Projects
                        </p>
                    </div>

                    {/* content */}
                    <div className="w-full flex flex-col justify-between items-start gap-15 p-5 lg:p-10">

                        {/* projects completed */}
                        <div className="w-full flex justify-between gap-5 items-center lg:text-nowrap">
                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-5xl font-bold">04+</h3>
                                <p className="text-sm font-semibold italic text-gray">Projects Completed</p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-5xl font-bold">14+</h3>
                                <p className="text-sm font-semibold italic text-gray">Learning Days</p>
                            </div>
                        </div>

                        {/* welcome content */}
                        <div className="w-full space-y-3">
                            <h1 className="text-4xl sm:text-7xl md:text-9xl font-bold">Hello</h1>
                            <p className="text-gray italic mt-3 font-semibold">- I'm Vishnuprakash working as a Fullstack Engineer. I am Learning React library through building projects with end to end.</p>
                        </div>

                        <div className="mt-5 font-semibold text-gray-700">
                            <Link
                                to="/tasks"
                                className="flex items-center gap-2 hover:text-blacky transition cursor-pointer">
                                See My Projects <ion-icon name="arrow-forward"></ion-icon>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* react banner */}
                <div className="w-full flex justify-center items-center lg:p-10">
                    <img src="/react.svg" alt="Hero banner" title="React SVG"
                        className="w-full h-full object-fit"
                    />
                </div>
            </div>

        </section>
    );
};

export default HeroPage;