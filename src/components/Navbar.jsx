import Container from "@/components/Container";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ArrowDiagonal from "@/assets/svg/arrow-45deg.svg?react";
import { NAVLINKS } from "@/constants/NAVBAR";
import Logo from "@/assets/svg/logo.svg?react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav
      className={cn(
        "absolute left-0 top-0 z-50 w-full py-[1.875rem] text-white transition-all duration-1000 md:h-auto",
      )}
    >
      <Container>
        <div className="items-center justify-between md:flex">
          <div className="flex w-full items-center justify-between md:w-fit">
            <a href="http://localhost:5173">
              <Logo
                className={cn(
                  "h-10 w-4",
                  pathname === "/" ? "text-white" : "text-primary",
                )}
              />
            </a>

            <div
              className="grid gap-2 md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <span
                className={cn(
                  "h-[1px] w-8",
                  pathname === "/" ? "bg-matte-white" : "bg-primary",
                )}
              ></span>
              <span
                className={cn(
                  "h-[1px] w-8",
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

          <div
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
                pathname === "/" ? "md:text-white" : "md:text-matte-black",
              )}
            >
              {NAVLINKS.map(({ link, url }, i) => (
                <li key={i}>
                  <NavLink
                    to={url}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "link",
                        isActive ? "font-semibold" : "font-normal",
                        pathname !== "/" ? "after:bg-matte-black" : "",
                      )
                    }
                  >
                    {link}
                  </NavLink>
                </li>
              ))}

              <li>
                <a
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
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
