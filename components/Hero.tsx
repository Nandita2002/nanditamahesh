"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-10 h-[500px] w-[500px] rounded-full bg-green-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-5xl">
          {/* Label */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-green-700"
          >
            PERSONAL WEBSITE
          </motion.p>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[6rem]
              xl:text-[7rem]
              font-black
              leading-[0.9]
              tracking-tight
              text-zinc-900
            "
          >
            Building,
            <br />
            learning and
            <br />
            documenting
            <br />
            the journey.
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              mt-10
              max-w-2xl
              text-lg
              md:text-xl
              leading-8
              text-zinc-600
            "
          >
            I&quot;m{" "}
            <span className="font-semibold text-zinc-900">
              Nandita Mahesh
            </span>{" "}
            — a Software Engineer, MBA student,
            product builder and active learner exploring
            technology, business intelligence,
            design and digital products.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-green-600
                px-8
                py-4
                text-base
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-green-700
              "
            >
              View Projects

              <FaArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/writing"
              className="
                rounded-full
                border
                border-green-200
                px-8
                py-4
                text-base
                font-semibold
                text-zinc-800
                transition-all
                duration-300
                hover:border-green-500
                hover:bg-green-50
              "
            >
              Read Articles
            </Link>
          </motion.div>

          {/* Social Links */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-6
            "
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                text-base
                font-medium
                text-zinc-600
                transition
                hover:text-green-700
              "
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Nandita2002"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                text-base
                font-medium
                text-zinc-600
                transition
                hover:text-green-700
              "
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="mailto:nanditam2029@gmail.com"
              className="
                text-base
                font-medium
                text-zinc-600
                transition
                hover:text-green-700
              "
            >
              Email ↗
            </a>
          </motion.div>

          {/* Current Focus */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Currently Exploring
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Artificial Intelligence",
                "Business Intelligence",
                "System Design",
                "Product Thinking",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-green-200
                    bg-green-50
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-green-800
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Scroll Hint */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex items-center gap-2 text-zinc-400"
          >
            <span className="text-sm">
              Scroll to explore
            </span>

            <span className="animate-bounce">
              ↓
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}