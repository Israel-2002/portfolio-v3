import Container from "@/components/Container";
import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "@/assets/svg/logo.svg?react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navRef = useRef();
  const logoRef = useRef();
  const linksRef = useRef([]);
  const hamburgerBarsRef = useRef([]);

  const logoUrl =
    import.meta.env.NODE_ENV === "development"
      ? "http://localhost:5173"
      : "https://izzy-portfoliooo.netlify.app/";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    if (pathname === "/") {
      if (logoRef.current) logoRef.current.style.color = "white";

      linksRef.current.forEach((link) => {
        if (link) link.style.color = "white";
      });

      hamburgerBarsRef.current.forEach((bar) => {
        if (bar) bar.style.backgroundColor = "white";
      });
    } else {
      if (logoRef.current) logoRef.current.style.color = "#5038E6";

      linksRef.current.forEach((link) => {
        if (link) link.style.color = "#333333";
      });

      hamburgerBarsRef.current.forEach((bar) => {
        if (bar) bar.style.backgroundColor = "#5038E6";
      });
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > window.innerHeight && currentScrollY < lastScrollY) {
        navRef.current.style.position = "fixed";
        navRef.current.style.top = 0;
        navRef.current.style.left = 0;
        navRef.current.style.background = "rgba(255, 255, 255, 1)";

        if (pathname === "/") {
          logoRef.current.style.color = "#5038E6";

          linksRef.current.forEach((link) => {
            if (link) link.style.color = "#5038E6";
          });

          hamburgerBarsRef.current.forEach((bar) => {
            if (bar) bar.style.backgroundColor = "#5038E6";
          });
        }
      } else {
        navRef.current.style.position = "absolute";
        navRef.current.style.top = "auto";
        navRef.current.style.left = "auto";
        navRef.current.style.background = "none";
        navRef.current.style.backdropFilter = "none";

        linksRef.current.forEach((link) => {
          if (link) link.style.color = "white";
        });

        hamburgerBarsRef.current.forEach((bar) => {
          if (bar) bar.style.backgroundColor = "#5038E6";
        });

        if (pathname === "/") {
          logoRef.current.style.color = "white";

          linksRef.current.forEach((link) => {
            if (link) link.style.color = "white";
          });

          hamburgerBarsRef.current.forEach((bar) => {
            if (bar) bar.style.backgroundColor = "white";
          });
        } else {
          logoRef.current.style.color = "#5038E6";
          linksRef.current.forEach((link) => {
            if (link) link.style.color = "#333333";
          });
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className={cn(
        "absolute left-0 top-0 z-50 w-full py-[1.875rem] text-white transition-all duration-1000 md:h-auto",
      )}
    >
      <Container>
        <div className="items-center justify-between md:flex">
          <div className="flex w-full items-center justify-between md:w-fit">
            <a
              ref={logoRef}
              href={logoUrl}
              className={cn(pathname === "/" ? "text-white" : "text-primary")}
            >
              <Logo className="h-10 w-4" />
            </a>

            <div
              className="grid gap-2 md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <span
                ref={(el) => hamburgerBarsRef.current.push(el)}
                className={cn(
                  "h-[1.5px] w-8",
                  pathname === "/" ? "bg-matte-white" : "bg-primary",
                )}
              ></span>
              <span
                ref={(el) => hamburgerBarsRef.current.push(el)}
                className={cn(
                  "h-[1.5px] w-8",
                  pathname === "/" ? "bg-matte-white" : "bg-primary",
                )}
              ></span>
            </div>
          </div>

          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed left-0 top-0 h-full w-full bg-matte-black/20 backdrop-blur-sm md:hidden"
            ></div>
          )}

          <MobileNav
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pathname={pathname}
          />

          <DesktopNav
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pathname={pathname}
            linksRef={linksRef}
          />

          {/* <div
            style={{
              left: isOpen ? 0 : "-100%",
            }}
            className="fixed top-0 grid h-dvh w-[90%] max-w-[500px] place-items-center bg-white transition-all duration-300 md:static md:left-auto md:top-auto md:flex md:h-auto md:w-fit md:max-w-none md:items-center md:justify-between md:bg-transparent"
          >
            <div
              className="absolute right-6 top-[32px] grid py-4 md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <span className="h-[1px] w-7 rotate-45 bg-matte-black"></span>
              <span className="h-[1px] w-7 -rotate-45 bg-matte-black"></span>
            </div>

            <ul
              className={cn(
                "flex flex-col items-center gap-10 text-center text-lg text-matte-black md:flex-row md:gap-12 md:text-base",
              )}
            >
              {NAVLINKS.map(({ link, url }, i) => (
                <li key={i}>
                  <NavLink
                    ref={(el) => linksRef.current.push(el)}
                    to={url}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "link",
                        isActive ? "font-semibold" : "font-normal",
                        pathname === "/"
                          ? "md:text-white"
                          : "md:text-matte-black",
                      )
                    }
                  >
                    {link}
                  </NavLink>
                </li>
              ))}

              <li>
                <a
                  ref={(el) => linksRef.current.push(el)}
                  href="https://israeldornor.vercel.app/"
                  target="_blank"
                  className={cn(
                    "link relative inline-block w-[110px] text-left md:w-[100px]",
                    pathname !== "/" ? "after:bg-matte-black" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Version 2
                  <ArrowDiagonal className="absolute right-0 top-1/2 -translate-y-1/2" />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
