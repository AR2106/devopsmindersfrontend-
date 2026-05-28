import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./../../styles/Navbar.module.scss";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

type MenuItem = {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
};

const menuData: MenuItem[] = [
  { label: "DevOps Services", path: "/services" },
  { label: "About DevOpsMinders", path: "/about-us" },
  { label: "Case Studies", path: "/cases-studies" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.navbarWrapper}>
      <div className="w-full bg-primary px-4 py-2 text-center text-[10px] md:text-sm text-white">
        AI That Works. DevOps That Scales. We build intelligent automation
        systems that run 24/7-chatbots, cloud infrastructure, and AI-powered
        workflows for businesses ready to move fast.
      </div>

      <nav className={styles.navbar} aria-label="Main Navigation">
        <div className={styles.container}>
          <Link to="/" className={styles.logo} aria-label="DevOpsMinders Home">
            <img
              src="/assets/logo.png"
              alt="DevOpsMinders DevOps Company Logo"
            />
          </Link>

          <div className={styles.navbarBody}>
            <ul className={styles.menu}>
              {menuData.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.menuItem} ${
                    activeIndex === index ? styles.open : ""
                  }`}
                  onMouseEnter={() =>
                    window.innerWidth > 768 && setActiveIndex(index)
                  }
                  onMouseLeave={() =>
                    window.innerWidth > 768 && setActiveIndex(null)
                  }
                >
                  {item.children ? (
                    <>
                      <div
                        className={styles.menuLink}
                        onClick={() =>
                          window.innerWidth <= 768 &&
                          setActiveIndex(activeIndex === index ? null : index)
                        }
                      >
                        <span>{item.label}</span>
                        <FaAngleDown className={styles.arrow} />
                      </div>

                      <div className={styles.dropdown}>
                        {item.children.map((child, i) => (
                          <Link key={i} to={child.path} title={child.label}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path!}
                      className={styles.menuLink}
                      title={item.label}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA (HIGH SEO VALUE LINK) */}
            <div className={styles.cta}>
              <Link
                to="/quote"
                className={styles.btn}
                aria-label="Get DevOps Quote"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* MOBILE ICON */}
          <button
            className={styles.mobileIcon}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`${styles.mobileMenu} ${
            mobileOpen ? styles.showMenu : ""
          }`}
        >
          {menuData.map((item, index) => (
            <div key={index} className={styles.mobileItem}>
              {item.children ? (
                <>
                  <div
                    className={styles.mobileLink}
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    {item.label}
                    <FaAngleDown
                      className={activeIndex === index ? styles.rotate : ""}
                    />
                  </div>

                  {activeIndex === index && (
                    <div className={styles.mobileDropdown}>
                      {item.children.map((child, i) => (
                        <Link key={i} to={child.path}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.path!} className={styles.mobileLink}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/quote"
            className={styles.mobileBtn}
            aria-label="Get DevOps Quote"
          >
            Get Quote
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
