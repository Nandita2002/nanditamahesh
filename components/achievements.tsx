import {
  FaAward,
  FaGraduationCap,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";

const achievements = [
  {
    title: "IIT Bombay E-Cell",
    subtitle: "Platinum Campus Ambassador",
    icon: FaAward,
    description:
      "Recognized as a Platinum Campus Ambassador for promoting entrepreneurship and innovation.",
  },
  {
    title: "Google Digital Garage",
    subtitle: "Digital Marketing Certification",
    icon: FaGraduationCap,
    description:
      "Completed Google's digital marketing certification covering SEO, analytics and online growth.",
  },
  {
    title: "NGO Volunteering",
    subtitle: "Community Impact",
    icon: FaHandsHelping,
    description:
      "Contributed to social initiatives and community development through volunteer activities.",
  },
  {
    title: "Virtual Stock Market",
    subtitle: "Competition Participant",
    icon: FaChartLine,
    description:
      "Participated in investment simulations and financial market learning programs.",
  },
];

export default function Achievements() {
  return (
    <section className="bg-green-50/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
            Recognition
          </p>

          <h2 className="text-4xl font-black text-zinc-900 md:text-5xl">
            Milestones along the journey.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            A few achievements, certifications and experiences
            that shaped my growth beyond software development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-green-100
                  bg-white
                  p-8
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <Icon
                  size={28}
                  className="mb-5 text-green-600"
                />

                <h3 className="text-xl font-bold text-zinc-900">
                  {item.title}
                </h3>

                <p className="mt-1 font-medium text-green-700">
                  {item.subtitle}
                </p>

                <p className="mt-4 leading-7 text-zinc-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}