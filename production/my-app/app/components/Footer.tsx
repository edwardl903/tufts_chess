import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC= () => {
    return (
        <footer className="w-full bg-[#64b0e2] py-8 relative">
            <div className="container mx-auto px-4 flex justify-between items-start">
                {/* tufts chess logo */}
                <div>
                    <img
                        src="/chesslogo.png"
                        alt="chess logo"
                        className="w-25 h-25"
                    ></img>

                </div>

                {/* contact and social section */}
                <div className="flex-1 flex justify-end items-start pt-4">
                    {/* Contact Info */}
                    <div className="text-xl text-white space-y-4 w-1/2">
                        <h3 className="text-4xl font-bold">Contact Us</h3>
                        <p>jumboschessclub@email.com</p>
                        <p>177 College Ave, Medford, MA 02155</p>
                        <p>(123) 456-7890</p>
                    </div>

                    {/* Social Links */}
                    <div className="text-2xl text-white space-y-6 text-right">
                        
                        <a href="https://instagram.com" target="_blank" className="flex items-center space-x-2 hover:underline">
                            <Image
                                src="/insLogo.jpeg"
                                alt="instagram logo"
                                width={20}
                                height={20}
                            />
                            <span>Instagram</span>
                        </a>
                        <a href="https://facebook.com" target="_blank" className="flex items-center space-x-2 hover:underline">
                            <Image
                                src="/facebookLogo.png"
                                alt="facebook logo"
                                width={20}
                                height={20}
                            />
                            <span>Facebook</span>
                        </a>
                        <a href="https://discord.com" target="_blank" className="flex items-center space-x-2 hover:underline">
                            <Image
                                src="/discordLogo.png"
                                alt="discord logo"
                                width={20}
                                height={20}
                            />
                            <span>Discord</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* bottom line */}
            <div className="w-full mt-8 border-t border-white ml-10 pl-20 text-white text-md py-2">
                © 2024 Tufts Chess Club. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;