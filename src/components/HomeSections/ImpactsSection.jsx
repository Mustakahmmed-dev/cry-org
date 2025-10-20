"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ImpactsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: 2500, label: "Children Educated" },
    { number: 120, label: "Active Volunteers" },
    { number: 40, label: "Projects Completed" },
    { number: 15000, label: "People Reached" },
  ];

  return (
    <section className="relative bg-[#071952] text-white py-20">
      {/* Optional overlay if you add background image later */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      <div ref={ref} className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Impacts
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Through dedication and collective action, Comrades of Rohingya Youth has reached
          thousands of lives across education, health, and community support.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-bold text-[#058610]">
                {inView ? <CountUp end={item.number} duration={3} separator="," /> : "0"}+
              </h3>
              <p className="mt-2 text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactsSection;
