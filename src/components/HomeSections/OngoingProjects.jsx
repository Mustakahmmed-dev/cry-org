
const OngoingProjects = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ongoing <span className="text-[#058610]">Projects</span>
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-10">
                    Our current projects focus on improving lives through education, health,
                    and youth empowerment programs led by Rohingya volunteers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Project 1 */}
                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                        <div className="overflow-hidden">
                            <img
                                src="/images/educationForAll.jpg"
                                alt="Education for All"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2">Education for All</h3>
                            <p className="text-gray-600 mb-4">
                                Providing access to non-formal education for children and youth in
                                the camps through community-led initiatives.
                            </p>
                            <a
                                href="#"
                                className="text-[#058610] font-medium hover:underline"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                        <div className="overflow-hidden">
                            <img
                                src="/images/healthHygiene.jpg"
                                alt="Health & Hygiene"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2">Health & Hygiene</h3>
                            <p className="text-gray-600 mb-4">
                                Promoting hygiene awareness and distributing essential supplies to
                                ensure community well-being.
                            </p>
                            <a
                                href="#"
                                className="text-[#058610] font-medium hover:underline"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                        <div className="overflow-hidden">
                            <img
                                src="/images/youthEmpowerment.jpg"
                                alt="Youth Empowerment"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2">Youth Empowerment</h3>
                            <p className="text-gray-600 mb-4">
                                Building skills and leadership opportunities for Rohingya youth to
                                take part in community-driven change.
                            </p>
                            <a
                                href="#"
                                className="text-[#058610] font-medium hover:underline"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default OngoingProjects