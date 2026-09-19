import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden border-t border-slate-200 bg-white pt-12 text-slate-900"
      aria-label="DevOpsMinders Website Footer"
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

      {/* Top Accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E80112]/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#E80112] text-white font-bold px-3 py-2 rounded-lg shadow-sm">
              DM
            </div>
            <h2 className="text-lg md:text-xl font-semibold">DevOpsMinders</h2>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            DevOpsMinders is a leading DevOps consulting company specializing in
            cloud infrastructure, CI/CD automation, Kubernetes, and DevSecOps
            solutions. We help startups and enterprises scale securely and
            efficiently.
          </p>

          {/* SOCIAL BACKLINKS */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/devopsminders/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/linkedin.svg"
                alt="DevOpsMinders LinkedIn profile"
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
                alt="DevOpsMinders Instagram page"
                className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
              />
            </a>

            <a
              href="https://github.com/Ahujakaur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/github.svg"
                alt="DevOpsMinders GitHub projects"
                className="w-5 h-5 cursor-pointer opacity-70 hover:opaciwty-100 transition"
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
                About DevOpsMinders
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
            DevOps Solutions
          </h3>

          <ul className="space-y-3 text-slate-600 text-sm">
            <li className="transition hover:text-slate-900">
              Cloud Migration Services
            </li>
            <li className="transition hover:text-slate-900">
              CI/CD Pipeline Automation
            </li>
            <li className="transition hover:text-slate-900">
              Kubernetes Deployment
            </li>
            <li className="transition hover:text-slate-900">
              Infrastructure as Code (Terraform)
            </li>
            <li className="transition hover:text-slate-900">
              DevSecOps Implementation
            </li>
            <li className="transition hover:text-slate-900">
              24/7 Cloud Monitoring
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
                DevOpsMinders, India <br />
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

      {/* BOTTOM */}
      <div className="relative z-10 border-t border-slate-200 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DevOpsMinders Tech Pvt Ltd. All rights reserved.</p>

          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-[#E80112] transition"
            >
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-[#E80112] transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
