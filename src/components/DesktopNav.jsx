import { NAVLINKS } from "@/constants/NAVBAR";
import { NavLink } from "react-router-dom";
import ArrowDiagonal from "@/assets/svg/arrow-45deg.svg?react";
import PropTypes from "prop-types";
import { cn } from "@/lib/cn";

const DesktopNav = ({ isOpen, pathname, setIsOpen, linksRef }) => {
  return (
    <div
      style={{
        left: isOpen ? 0 : "-100%",
      }}
      className="static left-auto top-auto hidden h-auto w-fit max-w-none items-center justify-between bg-transparent transition-all duration-300 md:flex"
    >
      <ul
        className={cn(
          "flex flex-row items-center gap-12 text-center text-base text-matte-black",
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
                  pathname === "/" ? "text-white" : "text-matte-black",
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
              "link relative inline-block w-[100px] text-left",
              pathname !== "/" ? "after:bg-matte-black" : "",
              pathname === "/" ? "text-white" : "text-matte-black",
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

DesktopNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  linksRef: PropTypes.object.isRequired,
};

export default DesktopNav;
