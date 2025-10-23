import PropTypes from "prop-types";
import { cn } from "@/lib/cn";
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
        <span className="h-[1px] w-7 -mt-[1px] -rotate-45 bg-matte-black"></span>
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
              "link relative flex items-center text-left gap-0.5",
              pathname !== "/" ? "after:bg-matte-black" : "",
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

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MobileNav;
