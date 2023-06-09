import { Transition } from "@headlessui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { AuthContext } from "../../Providers/AuthProvider";

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const logOutFun = () => {
        logOut();
    }
    return (
        <div className=" z-50 ">
            <nav className="  ">
                <div className=" mx-auto px-4 sm:px-6 lg:px-10 ">
                    <div className="flex items-center justify-between">
                        <div className=" w-full flex items-center justify-between">
                            <div className="flex-shrink-0   ">
                                <Link to={"/"}>
                                    <img className="h-20 py-2" src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to={"/"}
                                        className="  hover:text-red-500   px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>




                                    {
                                        user ? <>
                                            <Link
                                                to={"/bookingData"}
                                                className="  hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Booked
                                            </Link>
                                            <button onClick={logOutFun} className="  hover:text-red-500   px-3 py-2 rounded-md text-sm font-medium">LogOut</button>

                                        </> :
                                            <Link
                                                to={"/login"}
                                                className="  hover:text-red-500   px-3 py-2 rounded-md text-sm font-medium"
                                            >
                                                Login
                                            </Link>
                                    }
                                    <Link
                                        to={"/register"}
                                        className="  hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Register
                                    </Link>

                                </div>
                            </div>

                            <div className="hidden md:block">
                                <button className="btn btn-ghost btn-circle ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                                <button className="btn btn-ghost btn-circle ">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                        <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </button>
                                <button className=" btn-outline btn-secondary px-8 py-1.5 border ms-8 rounded-md">Appiontment</button>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="#"
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Team
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Calendar
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Reports
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Nav;