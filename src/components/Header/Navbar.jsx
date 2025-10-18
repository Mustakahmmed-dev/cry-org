"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, Search, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const links = (
        <>
            <li><Link href="/">Home</Link></li>
            <li className="relative group"><button className="flex items-center">About <ChevronDown /> <ChevronUp className="hidden" /> </button>
                <ul className="absolute hidden group-hover:flex flex-col w-72 py-3 bg-gray-700 text-gray-200 z-100 rounded">
                    <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">About Us</Link></li>
                    <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Projects</Link></li>
                    <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Team</Link></li>
                    <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Events</Link></li>
                </ul>
            </li>
            <li><Link href="/">Projects</Link></li>
            <li><Link href="/">News</Link></li>
            <li><Link href="/">Gallery</Link></li>
            <li><Link href="/">Contact</Link></li>
        </>
    );

    return (
        <header className="w-full fixed top-0 left-0 bg-[#058610] md:bg-white shadow-md z-50">
            <nav className="max-w-7xl mx-auto p-2 md:p-3 flex justify-between items-center">
                {/* Left section */}
                <div className="flex gap-1 md:gap-2 items-center">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setDrawerOpen(true)}
                        className="text-white md:hidden"
                    >
                        <Menu size={28} />
                    </button>

                    {/* Logo */}
                    <div className="h-14 hidden md:block">
                        <img
                            src="/logo.jpeg"
                            className="h-full"
                            alt="CRY Organization logo"
                        />
                    </div>
                    <h2 className="text-white md:text-gray-900 font-semibold text-sm md:text-base ">
                        CRY Organization
                    </h2>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-5 text-gray-100 md:text-gray-700 font-medium">
                    {links}
                </ul>

                {/* Right section */}
                <div className="flex flex-col gap-2">
                    <ul className="flex gap-2 justify-end text-gray-200 md:text-[#071952] text-xs">
                        <li><Link href="/">Press</Link></li>
                        <li><Link href="/">Join Us</Link></li>
                        <li><Link href="/">Login</Link></li>
                        <li><Link href="/">Donate</Link></li>
                        <Search size={20} className="md:text-gray-500" />
                    </ul>
                    <ul className="hidden md:flex lg:hidden gap-4 text-gray-100 md:text-gray-700">
                        {links}
                    </ul>
                </div>
            </nav>

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform ${drawerOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="font-semibold text-gray-800 text-lg">Menu</h3>
                    <button onClick={() => setDrawerOpen(false)}>
                        <X size={24} className="text-gray-600" />
                    </button>
                </div>

                <ul
                    onClick={() => setDrawerOpen(false)}
                    className="flex flex-col gap-4 p-4 text-gray-700 font-medium"
                >
                    {links}
                </ul>
            </div>

            {/* Overlay when drawer is open */}
            {drawerOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setDrawerOpen(false)}
                ></div>
            )}
        </header>
    );
};

export default Navbar;
