import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

type MenuItem = {
  label: string;
  path?: string;
  cta?: boolean;
  children?: { label: string; path: string }[];
};

const menuData: MenuItem[] = [
  { label: "Ai Solution", path: "/ai-solutions", cta: true },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about-us" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      {/* Top Accent Banner */}
      <div className="w-full bg-[#E80112] px-6 py-2 text-center text-[10px] font-medium tracking-wide text-white sm:px-8 lg:px-12 md:text-xs">
        AI That Works. DevOps That Scales. We build intelligent automation
        systems that run 24/7—chatbots, cloud infrastructure, and AI-powered
        workflows for businesses ready to move fast.
      </div>

      <nav
        className="mx-auto 2xl:max-w-7xl px-6 sm:px-8 lg:px-12"
        aria-label="Main Navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            aria-label="DevOpsMinders Home"
            className="flex items-center"
          >
            <img
              src="logo.png"
              alt="DevOpsMinders DevOps Company Logo"
              className="h-8 w-auto md:h-16"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <ul className="flex items-center gap-1.5">
              {menuData?.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {item?.cta ? (
                    // ===== AI SOLUTION BUTTON =====
                    <Link
                      to={item.path!}
                      title={item.label}
                      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md ${
                        location.pathname === item.path
                          ? "bg-[#c5010f]"
                          : "bg-[#E80112] hover:bg-[#c5010f]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : item?.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex(activeIndex === index ? null : index)
                        }
                        className="flex w-full items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#E80112]"
                      >
                        <span>{item.label}</span>
                        <FaAngleDown
                          className={`text-[10px] transition-transform duration-300 ${
                            activeIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Desktop Dropdown */}
                      <div
                        className={`absolute left-0 top-full mt-1 w-56 origin-top-left rounded-xl border border-slate-200 bg-white p-2 shadow-lg transition-all duration-300 ${
                          activeIndex === index
                            ? "visible opacity-100 translate-y-0"
                            : "invisible opacity-0 translate-y-2"
                        }`}
                      >
                        {item?.children?.map((child, i) => (
                          <Link
                            key={i}
                            to={child.path}
                            title={child.label}
                            className={`block rounded-lg px-3 py-2 text-sm transition-colors duration-200 hover:bg-slate-50 hover:text-[#E80112] ${
                              location.pathname === child.path
                                ? "text-[#E80112] font-semibold"
                                : "text-slate-600"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    // ===== STANDARD LINKS =====
                    <Link
                      to={item.path!}
                      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.path
                          ? "text-[#E80112]" 
                          : "text-slate-600 hover:text-[#E80112]"
                      }`}
                      title={item.label}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#E80112] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-6 py-3 sm:px-8 lg:px-12">
          {menuData?.map((item, index) => (
            <div
              key={index}
              className="border-b border-slate-100 py-1 last:border-0"
            >
              {item?.cta ? (
                // ===== AI SOLUTION BUTTON (MOBILE) =====
                <Link
                  to={item.path!}
                  className={`block w-full rounded-lg px-3 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md ${
                    location.pathname === item.path
                      ? "bg-[#c5010f]"
                      : "bg-[#E80112] hover:bg-[#c5010f]"
                  }`}
                >
                  {item.label}
                </Link>
              ) : item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    {item.label}
                    <FaAngleDown
                      className={`text-xs transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180 text-[#E80112]" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown Items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96 mt-1" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        className={`block rounded-lg px-6 py-2 text-sm transition-colors hover:bg-slate-50 hover:text-[#E80112] ${
                          location.pathname === child.path
                            ? "text-[#E80112] font-semibold"
                            : "text-slate-600"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                // ===== STANDARD LINKS (MOBILE) =====
                <Link
                  to={item.path!}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-slate-50 ${
                    location.pathname === item.path
                      ? "text-[#E80112]"
                      : "text-slate-800 hover:text-[#E80112]"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;