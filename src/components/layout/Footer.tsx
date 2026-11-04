import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden border-t border-slate-200 bg-white pt-12 text-slate-900"
      aria-label="DevOps Minders Website Footer"
    >
      {/* Background grid & glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#E80112]/[0.03] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 container 2xxl:mx-auto  lg:px-20  px-4 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#E80112] text-white font-bold px-3 py-2 rounded-lg shadow-sm">
              DM
            </div>
            <h2 className="text-lg md:text-xl font-semibold">DevOps Minders</h2>
          </div>

          {/* EXACT SEO Team Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            DevOps Minders AI & Cloud Solution is an AI development and
            automation company building AI agents, LLM applications, machine
            learning solutions and intelligent business workflows, supported by
            cloud, DevOps and MLOps expertise.
          </p>

          {/* SOCIAL BACKLINKS */}
          <div className="flex gap-4">
            <a
              href="https://in.linkedin.com/company/devopsminders"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/linkedin.svg"
                alt="DevOps Minders LinkedIn profile"
                className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
              />
            </a>

            <a
              href="https://www.instagram.com/devopsminders/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/insta.svg"
                alt="DevOps Minders Instagram page"
                className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
              />
            </a>

            <a
              href="https://x.com/devopsminders"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/twitter.svg"
                alt="DevOps Minders X Profile"
                className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
              />
            </a>
          </div>
        </div>

        {/* INTERNAL LINKS (SEO BOOST) */}
        <nav aria-label="DevOps Navigation Links">
          <h3 className="text-base md:text-lg font-semibold mb-4">Explore</h3>

          <ul className="space-y-3 text-slate-600 text-sm">
            <li>
              <Link to="/services" className="hover:text-[#E80112] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-[#E80112] transition">
                About DevOps Minders
              </Link>
            </li>
            <li>
              <Link
                to="/case-studies"
                className="hover:text-[#E80112] transition"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#E80112] transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">
            AI &amp; Cloud Solutions
          </h3>

          {/* ADDED LINKS: All pointing to existing App.tsx routes with targeted anchor text */}
          <ul className="space-y-3 text-slate-600 text-sm">
            <li>
              <Link to="/ai-development" className="hover:text-[#E80112] transition">
                DevOps Minders AI Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#E80112] transition">
                DevOps Minders Cloud Solutions
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#E80112] transition">
                DevOps Minders DevOps Consulting
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#E80112] transition">
                DevOps Minders IT Solutions
              </Link>
            </li>
            <li>
              <Link to="/ai-agents" className="hover:text-[#E80112] transition">
                AI Agents &amp; LLM Applications
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT + LOCAL SEO */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">
            Contact Information
          </h3>

          <address className="not-italic space-y-4 text-slate-600 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#E80112] mt-1 shrink-0" size={18} />
              <p>
                DevOps Minders, India <br />
                Serving clients globally
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#E80112] shrink-0" size={18} />
              <a
                href="tel:+918872781496"
                className="hover:text-[#E80112] transition"
              >
                +91 88727 81496
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#E80112] shrink-0" size={18} />
              <a
                href="mailto:info@devopsminders.com"
                className="hover:text-[#E80112] transition break-all"
              >
                info@devopsminders.com
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* BOTTOM - Removed Privacy/Terms links as they are not in App.tsx routes */}
      <div className="relative z-10 border-t border-slate-200 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DevOps Minders Tech Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};