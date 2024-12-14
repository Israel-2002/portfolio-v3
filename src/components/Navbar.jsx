import Button from "@/components/Button";
import Container from "@/components/Container";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn(
        "absolute left-0 top-0 z-50 w-full border-b py-[1.875rem] transition-all duration-1000 md:h-auto",
        isOpen ? "h-[476px]" : "h-[85px]",
      )}
    >
      <Container>
        <div className="grid-cols-3 items-center md:grid">
          <div className="flex w-full items-center justify-between">
            <span className="cursor-pointer">[izzy]</span>
            <span
              className="md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Hamburger
            </span>
          </div>

          <div
            className={cn(
              "absolute left-0 top-[85px] h-[390px] w-full bg-white/20 backdrop-blur-sm transition-transform duration-1000 md:static md:top-auto md:col-span-2 md:h-auto md:bg-transparent",
              isOpen
                ? "-translate-y-0"
                : "-translate-y-[120%] md:translate-y-0",
            )}
          >
            <div className="absolute left-0 top-[50px] grid w-full place-items-center md:static md:left-auto md:top-auto md:flex md:items-center md:justify-between">
              <ul className="mb-12 flex flex-col gap-8 text-center md:mb-0 md:flex-row">
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>

                <li>
                  <NavLink>About</NavLink>
                </li>

                <li>
                  <NavLink>Contact</NavLink>
                </li>
              </ul>

              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="md:hidden xl:block">
                  <span className="opacity-60">Email:</span>
                  <a href="mailto:israelrankin@gmail.com">
                    israelrankin@gmail.com
                  </a>
                </div>

                <Button
                  label="Contact me"
                  className="hover:bg-primary transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
