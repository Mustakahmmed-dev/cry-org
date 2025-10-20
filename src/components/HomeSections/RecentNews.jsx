"use client";
import Link from "next/link";

const RecentNews = () => {
  //sample posts
  const newsPosts = [
    {
      title: "Rohingya Youths Lead Education Drive in Camps",
      date: "October 15, 2025",
      excerpt:
        "Comrades of Rohingya Youth launched a new community-based education initiative to support children and adult learners in the refugee camps.",
      image: "/images/educationTeaching.jpg",
      slug: "/news/education-drive",
    },
    {
      title: "Blood Donation Camp Reaches 500 Donors",
      date: "September 28, 2025",
      excerpt:
        "Our volunteer network organized a major blood donation event to save lives across the camps, drawing participation from hundreds of youths.",
      image: "/images/bloodDonation.jpg",
      slug: "/news/blood-donation",
    },
    {
      title: "Community Clean-Up Campaign Expands",
      date: "August 20, 2025",
      excerpt:
        "Environmental awareness programs led by young volunteers have brought lasting change in cleanliness and waste management across several blocks.",
      image: "/images/cleanUpCampaign.jpg",
      slug: "/news/cleanup-campaign",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="news">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Recent <span className="text-[#058610]">News & Updates</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Stay up to date with the latest stories, projects, and events from Comrades of Rohingya Youth.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#058610] transition-colors duration-200">
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <Link
                  href={post.slug}
                  className="text-[#058610] text-sm font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link
            href="/news"
            className="bg-[#058610] text-white px-6 py-3 rounded-md hover:bg-[#046a0d] transition"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
