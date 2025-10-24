
const WhatWeDo = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    What We <span className="text-[#058610]">Do</span>
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-10">
                    At Comrades of Rohingya Youth (CRY), we empower the Rohingya community through education, advocacy, and humanitarian programs in youth leadership, women’s empowerment, child protection, and refugee rights.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                        <img src="/icons/educationIcon.png" alt="Education" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Education & Training</h3>
                        <p className="text-gray-600">
                            We organize learning centers and digital training for youth and
                            children to ensure access to education even in displacement.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                        <img src="/icons/human-rights.png" alt="Human Rights" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Human Rights Advocacy</h3>
                        <p className="text-gray-600">
                            We raise awareness and advocate for the rights and dignity of Rohingya
                            people globally through campaigns and youth-led initiatives.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                        <img src="/icons/social-community.png" alt="Community Support" className="w-12 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                        <p className="text-gray-600">
                            From blood donations to emergency response, we support community needs
                            through volunteer-led actions and mutual aid.
                        </p>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default WhatWeDo