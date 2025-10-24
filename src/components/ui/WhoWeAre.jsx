
const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              data-testid="who-we-are-title"
            >
              Who We Are
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A humanitarian organization dedicated to creating lasting change in communities worldwide
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-testid="about-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Comrades of Rohingya Youth (CRY) is a vibrant, youth-led organization founded on January 1, 2021, dedicated to defending and advancing the fundamental human rights of the Rohingya people and other marginalized ethnic communities in Myanmar. As a non-profit and non-governmental organization, CRY drives meaningful social change through powerful advocacy, transformative capacity building, and inclusive community engagement.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="become-a-volunteer"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                  data-testid="get-involved-btn"
                >
                  Get Involved
                </a>
                <a href="/our-programs"
                  className="px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold rounded-lg transition-colors"
                  data-testid="learn-more-btn"
                >
                  See our programs
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/GroupGentle.png"
                  alt="Our Story"
                  className="w-full h-[400px] object-cover"
                  data-testid="story-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl shadow-lg">
              <div className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-sm opacity-90">Lives Impacted</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-xl shadow-lg">
              <div className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Communities</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-rose-600 text-white rounded-xl shadow-lg">
              <div className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-90">Programs</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-lg">
              <div className="p-6 text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50"
        data-testid="mission-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/MissionChildren.jpg"
                  alt="Our Mission"
                  className="w-full h-[450px] object-cover"
                  data-testid="mission-image"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                </svg>
                <span className="font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empowering Communities, Transforming Lives
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  At CRY, we unite for dignity, justice, and sustainability—protecting refugee rights and our planet. Together, we strive for freedom, opportunity, and harmony for all.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Child-Centric Approach</h3>
                    <p className="text-gray-600 text-sm">Placing children at the heart of everything we do</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Community Partnership</h3>
                    <p className="text-gray-600 text-sm">Working hand-in-hand with local communities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sustainable Impact</h3>
                    <p className="text-gray-600 text-sm">Creating lasting change for generations to come</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        data-testid="vision-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
                <span className="font-semibold">Our Vision</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A World Where Every Child Matters
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  A peaceful and equal world where the Rohingya and displacements people live in harmony with nature—empowered to lead, learn, and thrive with dignity through advocacy and diplomacy.
                </p>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-rose-50 rounded-xl border-l-4 border-red-600">
                <p className="text-gray-800 italic text-lg">
                  "We stand for human rights, embrace diversity, uphold compassion, empower youth, act with integrity, and work for a just, peaceful, and sustainable world."
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/VissionGroupPhoto.jpg"
                  alt="Our Vision"
                  className="w-full h-[450px] object-cover"
                  data-testid="vision-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg">
              <div className="p-6">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Compassion</h3>
                <p className="text-gray-300">
                  We lead with empathy and understanding, recognizing the dignity and worth
                  of every individual we serve.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg">
              <div className="p-6">
                <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2m2 4h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm7-5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest standards of transparency, accountability, and
                  ethical conduct in all our operations.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg">
              <div className="p-6">
                <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, continuously improving
                  our approaches to maximize impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 text-green-50">
            Together, we can create a world where every child has the opportunity to thrive.
            Your support can transform lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="donate-us"
              className="px-8 py-3 bg-white text-green-600 hover:bg-gray-100 font-semibold text-lg rounded-lg transition-colors shadow-lg"
              data-testid="donate-now-btn"
            >
              Donate Now
            </a>
            <a href="become-a-volunteer"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold text-lg rounded-lg transition-colors"
              data-testid="become-volunteer-btn"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
