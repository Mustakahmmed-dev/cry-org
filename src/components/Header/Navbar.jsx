import { Menu, Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const links = <>
        <li><Link href="/" className="text-gray-900"> Home </Link></li>
        <li><Link href="/" className="text-gray-900"> About </Link></li>
        <li><Link href="/" className="text-gray-900"> Projects </Link></li>
        <li><Link href="/" className="text-gray-900"> News </Link></li>
        <li><Link href="/" className="text-gray-900"> Gallery </Link></li>
        <li><Link href="/" className="text-gray-900"> Contact </Link></li>
    </>
    return (
        <nav className=" shadow-md p-2 space-y-3 ">
            {/* Top side */}
            <div className="flex justify-between md:justify-end bg-gray-50">
                <div className=" md:hidden">
                    <Menu />
                </div>
                <ul className="flex gap-2 text-gray-900 text-sm">
                    <li> <Link href="/">Press</Link> </li>
                    <li> <Link href="/">Join Us</Link> </li>
                    <li> <Link href="/">Login</Link> </li>
                    <li> <Link href="/">Donate</Link> </li>
                    <Search className="md:hidden" />
                </ul>
            </div>

            {/* Bottom side */}
            <div className="hidden md:flex justify-between max-w-7xl mx-auto">
                <h2 className="text-xl">CRY Organization</h2>
                <ul className="flex gap-3 ">
                    {links}
                    <Search />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;