import PropTypes from "prop-types";
import { cn } from "@/lib/cn";
import ArrowDiagonal from "@/assets/svg/arrow-45deg.svg?react";
import { NAVLINKS } from "@/constants/NAVBAR";
import { NavLink } from "react-router-dom";

const MobileNav = ({ isOpen, pathname, setIsOpen }) => {
  return (
    <div
      style={{
        left: isOpen ? 0 : "-100%",
      }}
      className="fixed top-0 grid h-dvh w-[90%] max-w-[500px] place-items-center bg-white transition-all duration-300 md:hidden"
    >
      <div
        className="absolute right-6 top-[32px] grid py-4"
        onClick={() => setIsOpen(false)}
      >
        <span className="h-[1px] w-7 rotate-45 bg-matte-black"></span>
        <span className="h-[1px] w-7 -rotate-45 bg-matte-black"></span>
      </div>

      <ul
        className={cn(
          "flex flex-col items-center gap-10 text-center text-lg text-matte-black",
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
                  pathname === "/" ? "md:text-white" : "md:text-matte-black",
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
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileNav;
