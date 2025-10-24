
const OngoingProjects = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ongoing <span className="text-[#058610]">Programs</span>
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-10">
                    Our ongoing projects aim to strengthen the Rohingya community through education, research, and advocacy. Led by dedicated youth volunteers, we work to promote learning, protect rights, and build a more resilient and hopeful future.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Project 1 */}
                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                        <div className="overflow-hidden">
                            <img
                                src="/images/biologicalResearch.jpg"
                                alt="Education for All"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2">Rohingya Biological Research</h3>
                            <p className="text-gray-600 mb-4">
                                Documenting and studying Rohingya heritage, health, and resilience to preserve community identity and promote evidence-based development.
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
                                src="/images/missionChildren.jpg"
                                alt="Health & Hygiene"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2">Education for Children </h3>
                            <p className="text-gray-600 mb-4">
                               Providing learning opportunities for displaced Rohingya children to ensure access to education, literacy, and a brighter future.
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
                                src="/images/vissionGroupPhoto.jpg"
                                alt="Youth Empowerment"
                                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-xl font-semibold mb-2">Advocacy & Diplomacy for Refugee Rights </h3>
                            <p className="text-gray-600 mb-4">
                                Engaging governments, NGOs, and international bodies to defend refugee rights, promote justice, and amplify Rohingya voices globally.
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
                <a href="/programs" className="mt-4 block text-emerald-500 font-semibold">See all programs</a>
            </div>
        </section>

    )
}

export default OngoingProjects