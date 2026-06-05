import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-green-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left */}

          <div>
            <h3 className="text-2xl font-bold text-zinc-900">
              Nandita Mahesh
            </h3>

            <p className="mt-4 max-w-md text-zinc-600 leading-7">
              Building, learning and documenting the journey.
              Sharing projects, ideas, lessons and experiences
              from technology, business and continuous learning.
            </p>
          </div>

          {/* Right */}

          <div className="md:text-right">
            <h4 className="font-semibold text-zinc-900">
              Connect
            </h4>

            <div className="mt-5 flex gap-5 md:justify-end">
              <a
                href="https://github.com/Nandita2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition hover:text-green-700"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition hover:text-green-700"
              >
                <FaLinkedin size={22} />
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-500">
              © {new Date().getFullYear()} Nandita Mahesh.
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Line */}

        <div className="mt-12 border-t border-green-100 pt-6 text-center text-sm text-zinc-500">
          Designed & developed by Nandita Mahesh.
        </div>
      </div>
    </footer>
  );
}