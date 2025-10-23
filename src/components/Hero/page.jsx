"use client";
import Link from "next/link";

const Hero = () => {
    return (
        <section
            className="relative h-[90vh] w-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url('/images/RohingyaHero.png')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-left">
                <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                        Comrades of Rohingya Youth
                    </h1>
                    <p className="text-gray-200 text-sm md:text-lg mb-8">
                        Working together to uplift Rohingya youth through education,
                        leadership, and community development. Building a brighter future,
                        one step at a time.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/our-programs"
                            className="bg-[#058610] hover:bg-transparent hover:border text-white px-6 py-3 font-semibold transition-all"
                        >
                            Our Programs
                        </Link>
                        <Link
                            href="/donate-us"
                            className="bg-black/70 border border-white hover:bg-[#058610] text-white px-6 py-3 font-semibold transition-all"
                        >
                            Support us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero