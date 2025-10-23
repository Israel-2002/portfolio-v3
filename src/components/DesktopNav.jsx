import { NAVLINKS } from "@/constants/NAVBAR";
import { NavLink } from "react-router-dom";
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
              "link relative flex items-center gap-0.5 text-left",
              pathname !== "/" ? "after:bg-matte-black" : "",
              pathname === "/" ? "text-white" : "text-matte-black",
            )}
            onClick={() => setIsOpen(false)}
          >
            Version 2
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
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
