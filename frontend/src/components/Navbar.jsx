import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav
                className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-700"
                id="navigation-bar"
            >
                <div className="flex flex-wrap items-center justify-between w-full px-20 p-4">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                        id="studyPal"
                    >
                        <span className="self-center text-2xl font-[600] whitespace-nowrap text-white">
                        Terra<span className="text-green-400">Grow</span>
                        </span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a href="https://github.com/Subash-Lamichhane" className="hidden md:flex">
                            <motion.button
                                type="button"
                                className="bg-black hover:bg-gray-900 text-white md:px-5 md:py-2 rounded-md flex items-center space-x-2 mx-3 font-[600]"
                                whileHover={{ scale: 1.1 }}
                            ><FaGithub />
                                <span>Github</span>
                            </motion.button>
                        </a>
                        <Link to="/signup" className="hidden md:flex">
                            <motion.button
                                type="button"
                                className="bg-black hover:bg-gray-900 text-white border-2 md:px-5 md:py-2 rounded-md flex items-center space-x-2 px-2 font-[600]"
                                whileHover={{ scale: 1.1 }}
                            >
                                <span>Quine</span>
                            </motion.button>
                        </Link>

                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isOpen ? "true" : "false"}
                        >
                            <motion.span className="sr-only" whileHover={{ scale: 1.1 }}>
                                Open main menu
                            </motion.span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"
                            }`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
                            <motion.li whileHover={{ scale: 1.2 }}>
                                <Link
                                    to="/home"
                                    id="home"
                                    className="block py-2 px-3 text-lg md:text-xl text-white bg-green-700 rounded md:bg-transparent md:p-0 md:hover:text-green-400"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li whileHover={{ scale: 1.2 }}>
                                <Link
                                    to="/about"
                                    id="about"
                                    className="block py-2 px-3 text-lg md:text-xl text-white rounded hover:bg-gray-900 md:hover:bg-transparent md:hover:text-green-400 md:p-0"
                                >
                                    About
                                </Link>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
