import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="bg-black text-white pt-12"
      aria-label="DevOpsMinders Website Footer"
    >
      {/* Top Accent */}
      <div className="h-1 w-full bg-primary" />

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary text-white font-bold px-3 py-2 rounded">
              DM
            </div>
            <h2 className="text-lg md:text-xl font-semibold">DevOpsMinders</h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                className="w-5 h-5 invert cursor-pointer hover:scale-110 transition"
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
                className="w-5 h-5 invert cursor-pointer hover:scale-110 transition"
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
                className="w-5 h-5 invert cursor-pointer hover:scale-110 transition"
              />
            </a>
          </div>
        </div>

        {/* INTERNAL LINKS (SEO BOOST) */}
        <nav aria-label="DevOps Navigation Links">
          <h3 className="text-base md:text-lg font-semibold mb-4">Explore</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <Link to="/services" className="hover:text-white transition">
                DevOps Services
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-white transition">
                About DevOpsMinders
              </Link>
            </li>
            <li>
              <Link to="/cases-studies" className="hover:text-white transition">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">
            DevOps Solutions
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Cloud Migration Services</li>
            <li>CI/CD Pipeline Automation</li>
            <li>Kubernetes Deployment</li>
            <li>Infrastructure as Code (Terraform)</li>
            <li>DevSecOps Implementation</li>
            <li>24/7 Cloud Monitoring</li>
          </ul>
        </div>

        {/* CONTACT + LOCAL SEO */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4">
            Contact Information
          </h3>

          <address className="not-italic space-y-4 text-gray-400 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={18} />
              <p>
                DevOpsMinders, India <br />
                Serving clients globally
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={18} />
              <a href="tel:+918872781496" className="hover:text-white">
                +91 88727 81496
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={18} />
              <a
                href="mailto:info@devopsminders.com"
                className="hover:text-white"
              >
                info@devopsminders.com
              </a>
            </div>
          </address>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 DevOpsMinders Tech Pvt Ltd. All rights reserved.</p>

          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
