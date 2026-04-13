import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-20">

            {/* MAIN FOOTER */}
            <div className="w-[95%] lg:w-[90%] mx-auto py-14 grid
            grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* BRAND */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">
                        Book Vibe
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                        Discover amazing books, track your reading journey
                        and build your perfect bookshelf with Book Vibe.
                    </p>

                    <div className="flex gap-4 pt-2 text-lg">
                        <FaFacebookF className="hover:text-green-400 cursor-pointer transition" />
                        <FaGithub className="hover:text-green-400 cursor-pointer transition" />
                        <FaLinkedinIn className="hover:text-green-400 cursor-pointer transition" />
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-2">
                        <li className="hover:text-green-400 cursor-pointer">Home</li>
                        <li className="hover:text-green-400 cursor-pointer">Listed Books</li>
                        <li className="hover:text-green-400 cursor-pointer">Pages To Read</li>
                    </ul>
                </div>

                {/* RESOURCES */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Resources
                    </h3>

                    <ul className="space-y-2">
                        <li className="hover:text-green-400 cursor-pointer">Blog</li>
                        <li className="hover:text-green-400 cursor-pointer">Help Center</li>
                        <li className="hover:text-green-400 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-green-400 cursor-pointer">Terms</li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">
                        Subscribe
                    </h3>

                    <p className="text-gray-400 mb-4">
                        Get book updates & reading tips.
                    </p>

                    <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-transparent px-4 py-3 outline-none w-full"
                        />

                        <button className="bg-green-500 hover:bg-green-600 px-5 py-3 text-white font-semibold">
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-800">
                <div className="w-[95%] lg:w-[90%] mx-auto py-5
                flex flex-col md:flex-row justify-between items-center gap-3">

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Book Vibe. All Rights Reserved.
                    </p>

                    <p className="text-sm text-gray-500">
                        Designed with ❤️ by Mahfuz
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;