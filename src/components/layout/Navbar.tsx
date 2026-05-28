import { useState } from "react";
import { navigation } from "../../constants/navigation";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const currentUrl = pathname + hash;

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100]">
        <div className="w-full bg-primary px-4 py-2 text-center text-[10px] font-normal text-white shadow-md md:text-sm">
          AI That Works. DevOps That Scales. We build intelligent automation
          systems that run 24/7-chatbots, cloud infrastructure, and AI-powered
          workflows for businesses ready to move fast.
        </div>

        <header className="border-b border-white/10 bg-black text-white">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            <img
              src="/assets/logo.png"
              alt="DevOps Minders"
              className="w-[170px]"
            />

            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              {navigation.map((item) =>
                !item?.isButton ? (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className={`text-sm font-normal transition-colors hover:text-primary ${
                      currentUrl === item.href ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    href="/contact"
                    className="rounded-full px-6 py-1 text-sm font-normal text-white transition-all duration-200 hover:scale-105 bg-primary"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
   
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </header>
      </div>


      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 z-150 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6">
          {navigation.map((item) =>
            !item?.isButton ? (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-colors ${
                    isActive ? "text-primary" : "text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <>
                <hr className="border-white/20 my-2" />
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full px-6 py-2 text-center text-sm font-normal text-white bg-primary"
                >
                  {item.label}
                </a>
              </>
            ),
          )}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
