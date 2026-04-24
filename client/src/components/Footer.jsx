import { useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-slate-200/70 bg-slate-100 text-slate-700 dark:border-slate-800/70 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
            EcoNexus
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Empowering innovators and institutions to build a sustainable future
            through AI-driven collaboration.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-slate-900 dark:text-slate-200">
            Quick Links
          </h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li
              className="cursor-pointer transition hover:text-emerald-600"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="cursor-pointer transition hover:text-emerald-600"
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className="cursor-pointer transition hover:text-emerald-600"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
            <li
              className="cursor-pointer transition hover:text-emerald-600"
              onClick={() => navigate("/help")}
            >
              Help
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-slate-900 dark:text-slate-200">
            Platform
          </h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="transition hover:text-emerald-600">AI Evaluation</li>
            <li className="transition hover:text-emerald-600">
              Innovation Tracking
            </li>
            <li className="transition hover:text-emerald-600">
              Institutional Access
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-200">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-emerald-500" />
              <a
                href="mailto:rajamitstm@gmail.com"
                className="transition hover:text-emerald-500"
              >
                rajamitstm@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-emerald-500" />
              <a
                href="tel:+917091132000"
                className="transition hover:text-emerald-500"
              >
                +91-7091132xxx
              </a>
            </p>
          </div>

          <div className="mt-6 flex justify-start gap-4">
            <a
              href="https://amitkumarraj.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition hover:bg-emerald-500 hover:text-white dark:bg-slate-800 dark:text-slate-100"
            >
              <FaGlobe size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/amitkumarraj-stm/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-100"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/amitrajstm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition hover:bg-slate-900 hover:text-white dark:bg-slate-800 dark:text-slate-100"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/70 px-6 py-6 text-center text-sm text-slate-500 dark:border-slate-800/70 dark:text-slate-400">
        Copyright {new Date().getFullYear()} EcoNexus. All rights reserved.
      </div>
    </footer>
  );
}
