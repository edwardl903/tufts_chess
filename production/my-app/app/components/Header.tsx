import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
    // make the header transparent on the home page 
    transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent }) => {
    return (
        <header className={`w-full px-8 py-8 flex justify-between items-center ${
            transparent ? "bg-transparent" : "bg-[#64b0e2]"
          } relative z-20`}
        >
            {/* home link on the left */}
            <Link href="/" passHref>
                <div className="flex items-center space-x-4 cursor-pointer">
                {/* Logo */}
                    <Image
                        src="/chesslogo.png"
                        alt="Chess Logo"
                        width={60} // Adjust size as needed
                        height={60}
                        className="rounded-2xl"
                    ></Image>
                <h1 className="text-2xl text-white transform tracking-widest">Tufts Chess</h1>
                </div>
            </Link>

            {/* pages link son the right */}
            <nav className="text-xl flex space-x-10 pr-8">

                {/* about and its dropdown */}
                <div className="relative group">
                    <Link href="/about" passHref>
                        <div className="flex items-center space-x-2 cursor-pointer text-white">
                            <h1>About</h1>
                            {/* Dropdown arrow */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 9l6 6 6-6"
                                />
                            </svg>
                        </div>
                
                    </Link>
                    <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg">
                        <ul className="p-1 text-md text-gray-600">
                            <li className="px-4 py-1 hover:bg-gray-200">
                                <Link href="/about/eboard">Eboard</Link>
                            </li>
                            <li className="px-4 py-1 hover:bg-gray-200">Mission</li>
                            <li className="px-4 py-1 hover:bg-gray-200">History</li>
                        </ul>
                    </div>
                </div>


            
                <Link href="/leaderboard" passHref>
                    <h1 className="text-white">Leaderboard</h1>
                </Link>

                <Link href="/resources" passHref>
                    <h1 className="text-white">Resources</h1>
                </Link>

                {/* gallery and its dropdown */}
                <div className="relative group">
                    <Link href="/events" passHref>
                        <div className="flex items-center space-x-2 cursor-pointer text-white">
                            <h1>Events</h1>
                            {/* Dropdown arrow */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 9l6 6 6-6"
                                />
                            </svg>
                        </div>
                
                    </Link>
                    <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg">
                        <ul className="p-1 text-md text-gray-600">
                            <li className="px-4 py-1 hover:bg-gray-200">Upcoming Events</li>
                            <li className="px-4 py-1 hover:bg-gray-200">Past Events</li>
                        </ul>
                    </div>
                </div>



                <Link href="/contact" passHref>
                    <h1 className="text-white">Contact</h1>
                </Link>
            </nav>
        </header>
    );
};

export default Header;