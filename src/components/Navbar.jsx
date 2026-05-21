import { useState, useContext } from "react";
import { Link } from "react-router";

import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="w-full py-3 relative mb-10">
            <div className="container mx-auto px-3 md:px-0 flex justify-between items-center">

                <div className="flex items-center justify-center gap-15">
                    <h1 className="text-2xl font-bold cursor-default">
                        <Link to="/">
                            Vishnuprakash
                        </Link>
                    </h1>

                    {/* nav lists */}
                    <ul className="hidden md:flex justify-center items-center font-semibold gap-5">
                        <li className="hover:text-gray-700 text-gray-500 cursor-pointer duration-300 transition">
                            <a href="https://awizp.netlify.app/">About</a>
                        </li>
                        <li className="hover:text-gray-700 text-gray-500 cursor-pointer duration-300 transition">
                            <a href="https://github.com/awizp">Github</a>
                        </li>
                        <li className="hover:text-gray-700 text-gray-500 cursor-pointer duration-300 transition">
                            <a href="https://www.linkedin.com/in/awizp/">LinkedIn</a>
                        </li>
                    </ul>
                </div>

                {/* dark theme */}
                <div className="flex justify-center items-center font-semibold gap-3 md:gap-8">
                    <Link
                        to="/tasks"
                        className="hidden md:block hover:text-gray-700 text-gray-500 cursor-pointer duration-300 transition"
                    >
                        My Projects
                    </Link>

                    <div onClick={toggleTheme}
                        className={`flex justify-center items-center w-7 h-7 rounded-lg p-3 transition cursor-pointer text-sm border border-blacky select-none`}>
                        <div className={`${theme === 'light' ? 'hidden' : 'flex'} justify-center items-center`}>
                            <ion-icon name="sunny"></ion-icon>
                        </div>
                        <div className={`${theme === 'light' ? 'flex' : 'hidden'} justify-center items-center`}>
                            <ion-icon name="moon"></ion-icon>
                        </div>
                    </div>

                    {/* hamburger menu */}
                    <div className="flex md:hidden justify-center items-center w-7 h-7 rounded-lg p-3 hover:bg-blacky hover:text-white transition cursor-pointer text-sm border border-blacky hover:border-white"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                        <div className="flex justify-center items-center"><ion-icon name="menu"></ion-icon></div>
                    </div>
                </div>

                {/* mobile menu */}
                <div className={`md:hidden flex-col justify-center items-center gap-5 text-sm absolute top-15 right-5 rounded-xl p-10 border border-black bg-light-gray z-50 ${isNavOpen ? 'flex' : 'hidden'}`}
                >
                    <div className="hover:text-zinc-700 text-zinc-500 cursor-pointer duration-300 transition flex items-center gap-2">
                        <ion-icon name="grid"></ion-icon> My Projects
                    </div>

                    <ul className="flex flex-col justify-center items-start gap-3">
                        <li className="hover:text-zinc-700 text-zinc-500 cursor-pointer duration-300 transition">
                            <a href="https://awizp.netlify.app/" className="flex items-center gap-2">
                                <ion-icon name="person"></ion-icon> About
                            </a>
                        </li>
                        <li className="hover:text-zinc-700 text-zinc-500 cursor-pointer duration-300 transition">
                            <a href="https://github.com/awizp" className="flex items-center gap-2">
                                <ion-icon name="logo-github"></ion-icon> Github
                            </a>
                        </li>
                        <li className="hover:text-zinc-700 text-zinc-500 cursor-pointer duration-300 transition">
                            <a href="https://www.linkedin.com/in/awizp/" className="flex items-center gap-2">
                                <ion-icon name="logo-linkedin"></ion-icon> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;