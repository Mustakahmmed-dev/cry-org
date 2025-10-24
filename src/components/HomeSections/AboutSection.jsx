
const AboutSection = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-4">

                {/* Image in left side */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/images/CryVolunteers.jpg"
                        alt="Comrades of Rohingya Youth volunteers"
                        className="rounded shadow-md object-cover w-full h-[350px]"
                    />
                </div>

                {/* Right side contnets */}
                <div className="w-full md:w-1/2 space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        About <span className="text-[#058610]">Comrades of Rohingya Youth</span>
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Comrades of Rohingya Youth (CRY) is a vibrant, youth-led organization founded on January 1, 2021, dedicated to defending and advancing the fundamental human rights of the Rohingya people and other marginalized ethnic communities in Myanmar. As a non-profit and non-governmental organization, CRY drives meaningful social change through powerful advocacy, transformative capacity building, and inclusive community engagement.                    </p>
                    <a href="/who-we-are" className="bg-[#058610] text-white px-6 py-3 rounded-md hover:bg-black transition-all">
                        Read More
                    </a>
                </div>

            </div>
        </section>

    )
}

export default AboutSection