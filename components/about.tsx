import Image from "next/image";
import {
  FaLaptopCode,
  FaBookOpen,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Photo */}

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-green-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg">
              <Image
                src="/profilepic.jpg"
                alt="Nandita Mahesh"
                width={700}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-green-700">
              About Me
            </p>

            <h2 className="text-4xl font-black leading-tight text-zinc-900 md:text-5xl">
              The person behind the work.
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-600">
              I&quot;m Nandita Mahesh, a Software Engineer,
              MBA student and lifelong learner who enjoys
              building products, solving problems and
              sharing knowledge.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              My journey spans software development,
              digital marketing, entrepreneurship,
              volunteering, leadership initiatives and
              continuous learning. I believe growth
              happens when you build, learn and share
              consistently.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-green-100 p-5">
                <FaLaptopCode
                  size={22}
                  className="mb-3 text-green-600"
                />
                <h3 className="font-semibold text-zinc-900">
                  Software Engineer
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Building web applications and digital
                  products.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 p-5">
                <FaGraduationCap
                  size={22}
                  className="mb-3 text-green-600"
                />
                <h3 className="font-semibold text-zinc-900">
                  MBA Student
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Exploring business intelligence and
                  analytics.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 p-5">
                <FaBookOpen
                  size={22}
                  className="mb-3 text-green-600"
                />
                <h3 className="font-semibold text-zinc-900">
                  Active Learner
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Constantly learning new technologies,
                  tools and ideas.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 p-5">
                <FaLightbulb
                  size={22}
                  className="mb-3 text-green-600"
                />
                <h3 className="font-semibold text-zinc-900">
                  Problem Solver
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Turning ideas into practical digital
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}