import Container from "@/components/Container";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import arrowDiagonal from "@/assets/svg/arrow-45deg.svg";
import arrowDiagonalBlack from "@/assets/svg/arrow-45deg-black.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        "absolute left-0 top-0 z-50 w-full py-[1.875rem] text-white transition-all duration-1000 md:h-auto",
      )}
    >
      <Container>
        <div className="items-center justify-between md:flex">
          <div className="flex w-full items-center justify-between md:w-fit">
            <span className="cursor-pointer text-xl">izzy®</span>

            <div
              className="grid gap-2 md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <span className="h-[1px] w-8 bg-matte-white"></span>
              <span className="h-[1px] w-8 bg-matte-white"></span>
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
            className="transition-al absolute top-0 grid h-dvh w-[90%] max-w-[500px] place-items-center bg-white duration-300 md:static md:left-auto md:top-auto md:flex md:h-auto md:w-fit md:max-w-none md:items-center md:justify-between md:bg-transparent"
          >
            <div
              className="absolute right-6 top-[26px] grid py-4 md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <span className="h-[1px] w-7 rotate-45 bg-matte-black"></span>
              <span className="h-[1px] w-7 -rotate-45 bg-matte-black"></span>
            </div>

            <ul className="flex flex-col items-center gap-10 text-center text-lg text-matte-black md:flex-row md:gap-12 md:text-base md:text-white">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>

              <li>
                <NavLink>About</NavLink>
              </li>

              <li>
                <NavLink>Contact</NavLink>
              </li>

              <li>
                <a
                  href="https://israeldornor.vercel.app/"
                  target="_blank"
                  className="flex items-center"
                >
                  Version 2
                  <img
                    className="hidden w-[30px] md:block"
                    src={arrowDiagonal}
                    alt=""
                  />
                  <img
                    className="w-[30px] md:hidden"
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
