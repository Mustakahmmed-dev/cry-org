"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Menu, Search, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const drawerRef = useRef(null);

  // Drawer accessibility and close-on-click handling
  useEffect(() => {
    function handleOutside(e) {
      if (drawerOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        setDrawerOpen(false);
      }
    }

    function handleInside(e) {
      const link = e.target.closest("a");
      if (link && !link.classList.contains("dropdown-toggle")) {
        setDrawerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    const node = drawerRef.current;
    node?.addEventListener("click", handleInside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      node?.removeEventListener("click", handleInside);
    };
  }, [drawerOpen]);

  const desktopLinks = (
    <>
      <li><Link href="/" className="hover:text-red-500 hover:font-semibold">Home</Link></li>

      <li className="relative group hover:text-red-500 hover:font-semibold">
        <button
          type="button"
          className="dropdown-toggle flex items-center cursor-pointer"
        >
          About <ChevronDown className="ml-1 group-hover:hidden" />
          <ChevronUp className="ml-1 hidden group-hover:block" />
        </button>
        <ul className="absolute hidden group-hover:flex flex-col w-72 py-3 bg-gray-700 text-gray-200 z-50 rounded">
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">About Us</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Projects</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Team</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Events</Link></li>
        </ul>
      </li>

      <li className="relative group hover:text-red-500 hover:font-semibold">
        <button
          type="button"
          className="dropdown-toggle flex items-center cursor-pointer"
        >
          Projects <ChevronDown className="ml-1 group-hover:hidden" />
          <ChevronUp className="ml-1 hidden group-hover:block" />
        </button>
        <ul className="absolute hidden group-hover:flex flex-col w-72 py-3 bg-gray-700 text-gray-200 z-50 rounded">
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Education</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Social Awareness</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Rohingya Curriculum</Link></li>
        </ul>
      </li>

      <li><Link href="/">News</Link></li>
      <li><Link href="/">Gallery</Link></li>
      <li><Link href="/">Contact</Link></li>
    </>
  );

  const mobileLinks = (
    <>
      <li><Link href="/">Home</Link></li>

      <li className="relative">
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
          type="button"
          className="dropdown-toggle flex items-center justify-between w-full cursor-pointer"
        >
          About
          {aboutOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        <ul
          className={`flex flex-col mt-2 bg-gray-100 rounded overflow-hidden transition-all duration-200 ${
            aboutOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">About Us</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Projects</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Team</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Events</Link></li>
        </ul>
      </li>
      <li className="relative">
        <button
          onClick={() => setProjectsOpen(!projectsOpen)}
          type="button"
          className="dropdown-toggle flex items-center justify-between w-full cursor-pointer"
        >
          Projects
          {projectsOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        <ul
          className={`flex flex-col mt-2 bg-gray-100 rounded overflow-hidden transition-all duration-200 ${
            projectsOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Education</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Social Awareness</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Rohingya Zuban</Link></li>
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
          <h2 className="text-white md:text-gray-900 font-semibold text-sm md:text-base">
            CRY Organization
          </h2>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-5 text-gray-100 md:text-gray-700 font-medium">
          {desktopLinks}
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
            {desktopLinks}
          </ul>
        </div>
      </nav>

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="h-20">
            <img src="/logo.jpeg" className="h-full" alt="CRY Organization logo" />
          </div>
          <button onClick={() => setDrawerOpen(false)} title="Close">
            <X size={35} className="text-gray-100 bg-red-600 hover:bg-[#058610] rounded" />
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4 text-gray-700 font-medium">
          {mobileLinks}
        </ul>
      </div>

      {/* Overlay */}
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
