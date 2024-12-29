import Container from "@/components/Container";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import arrowDiagonal from "@/assets/svg/arrow-45deg.svg";
import arrowDiagonalBlack from "@/assets/svg/arrow-45deg-black.svg";
import { NAVLINKS } from "@/constants/NAVBAR";
import logo from "@/assets/images/logo.png";

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
              <img
                src={logo}
                alt=""
                className={cn(
                  "w-4",
                  pathname === "/"
                    ? "invert filter"
                    : "opacity-80 brightness-75 filter",
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
              className="absolute right-6 top-[26px] grid py-4 md:hidden"
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
                    "link flex items-center",
                    pathname !== "/" ? "after:bg-matte-black" : "",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Version 2
                  <img
                    className={cn(
                      "hidden w-[30px] md:block",
                      pathname !== "/" ? "md:hidden" : "",
                    )}
                    src={arrowDiagonal}
                    alt=""
                  />
                  <img
                    className={cn(
                      "w-[30px] md:hidden",
                      pathname !== "/" ? "md:block" : "",
                    )}
                    src={arrowDiagonalBlack}
                    alt=""
                  />
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
