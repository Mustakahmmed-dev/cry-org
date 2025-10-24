"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Menu, Search, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
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
        <ul className="absolute text-sm hidden group-hover:flex flex-col w-72 py-3 bg-gray-700 text-gray-200 z-50 rounded">
          <li><Link href="/who-we-are" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Who We Are</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Leadership</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Global Presences</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Partners & Collaborations</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Annual Reports</Link></li>
        </ul>
      </li>
      {/* Programs */}
      <li className="relative group hover:text-red-500 hover:font-semibold">
        <button
          type="button"
          className="dropdown-toggle flex items-center cursor-pointer "
        >
          Programs <ChevronDown className="ml-1 group-hover:hidden" />
          <ChevronUp className="ml-1 hidden group-hover:block" />
        </button>
        <ul className="absolute hidden group-hover:flex flex-col w-72 py-3 bg-gray-700 text-gray-200 z-50 text-sm rounded">
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Blood Donation</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">International Young School</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Emergency Services</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Child Rights</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Women's Empowerment</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Climate Action </Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Advocacy & Diplomacy for refugee rights</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Rohingya Biological Research </Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Training Workshops </Link></li>
        </ul>
      </li>
      {/* News, Media */}
      <li className="relative group hover:text-red-500 hover:font-semibold">
        <button
          type="button"
          className="dropdown-toggle flex items-center cursor-pointer "
        >
          News & Media <ChevronDown className="ml-1 group-hover:hidden" />
          <ChevronUp className="ml-1 hidden group-hover:block" />
        </button>
        <ul className="absolute text-sm hidden group-hover:flex flex-col w-72 py-3 bg-gray-700 text-gray-200 z-50 rounded">
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Latest News </Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Press Releases </Link></li>
          <li><Link href="/photos-gallery" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-200">Photos Gallery</Link></li>
        </ul>
      </li>
      <li><Link href="/contact" className="hover:text-red-500 hover:font-semibold">Contact</Link></li>
    </>
  );

  const mobileLinks = (
    <>
      <li><Link href="/" className="hover:text-red-500 hover:font-semibold">Home</Link></li>
      {/* About */}
      <li className="relative">
        <button
          onClick={() => setAboutOpen(!aboutOpen)}
          type="button"
          className="dropdown-toggle flex items-center justify-between w-full cursor-pointer hover:text-red-500 hover:font-semibold"
        >
          About
          {aboutOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        <ul
          className={`flex flex-col mt-2 bg-gray-100 rounded overflow-hidden transition-all duration-200 ${aboutOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <li><Link href="/who-we-are" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Who We Are</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Leadership</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Global Presences</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Partners & Collaborations</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Annual Reports</Link></li>
        </ul>
      </li>
      {/* Programs */}
      <li className="relative">
        <button
          onClick={() => setProgramsOpen(!programsOpen)}
          type="button"
          className="dropdown-toggle flex items-center justify-between w-full cursor-pointer hover:text-red-500 hover:font-semibold"
        >
          Programs
          {programsOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        <ul
          className={`flex flex-col mt-2 bg-gray-100 rounded overflow-hidden transition-all duration-200 ${programsOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100"> Blood Donation</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">International Young School</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Emergency Services</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Child Rights</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Women's Empowerment</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Climate Action </Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Advocacy & Diplomacy for Refugee Rights </Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Rohingya Biological Research</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Training Workshops </Link></li>
        </ul>
      </li>
      <li className="relative">
        <button
          onClick={() => setNewsOpen(!newsOpen)}
          type="button"
          className="dropdown-toggle flex items-center justify-between w-full cursor-pointer hover:text-red-500 hover:font-semibold"
        >
          News & Media
          {newsOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        <ul
          className={`flex flex-col mt-2 bg-gray-100 rounded overflow-hidden transition-all duration-200 ${newsOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100"> Latest News</Link></li>
          <li><Link href="/" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Press Releases</Link></li>
          <li><Link href="/photos-gallery" className="py-2 px-4 block hover:bg-[#058610] hover:text-gray-100">Photos Gallery</Link></li>
        </ul>
      </li>
      <li><Link href="/contact" className="hover:text-red-500 hover:font-semibold">Contact</Link></li>
    </>
  );

  return (
    <header className="w-full sticky top-0 left-0 bg-[#058610] md:bg-white shadow-md z-50">
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
          <a href="/" className="h-14 hidden md:block">
            <img
              src="/logo.jpeg"
              className="h-full"
              alt="CRY Organization logo"
            />
          </a>
          <h2 className="text-white md:text-gray-900 font-semibold text-base">
            CRY Humanitarian
          </h2>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-5 text-gray-100 md:text-gray-700 font-medium">
          {desktopLinks}
        </ul>

        {/* Right section */}
        <div className="flex flex-col gap-2">
          <ul className="flex gap-2 justify-end text-gray-200 md:text-[#071952] ">
            <li><Link href="/" className="md:text-[#058610] hover:underline hover:text-black font-semibold">Login</Link></li>
            <li><Link href="/" className="md:text-[#058610] hover:underline hover:text-black font-semibold">Donate</Link></li>
            <Search size={25} className="md:text-gray-500" />
          </ul>
          <ul className="hidden md:flex lg:hidden gap-4 text-gray-100 md:text-gray-700">
            {desktopLinks}
          </ul>
        </div>
      </nav>

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform overflow-y-auto overscroll-contain ${drawerOpen ? "translate-x-0" : "-translate-x-full"
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
