import { PROJECTS } from "@/constants/PROJECTS";
import { cn } from "@/lib/cn";
import bracketOpen from "@/assets/svg/bracket-open.svg";
import bracketClose from "@/assets/svg/bracket-close.svg";
import arrowRight from "@/assets/svg/arrow-right.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-black text-white">
      <div className="xl:border-b xl:border-b-white/10">
        <ul className="mx-auto grid max-w-[1440px] xl:grid-cols-2">
          {PROJECTS.slice(0, 2).map(({ category, img, title }, i) => (
            <li
              key={i}
              className={cn(
                "border-b border-b-white/10 px-6 pb-6 pt-[1.875rem] xl:border-b-transparent xl:px-[1.375rem] xl:pb-[1.375rem] xl:pt-[4.375rem]",
                i === 0
                  ? "xl:border-r xl:border-r-white/10 min-[1462px]:pl-0"
                  : "min-[1462px]:pr-0",
              )}
            >
              <div className="mb-[0.6875rem] flex items-center gap-0.5 text-sm font-semibold xl:mb-5 xl:text-[1.0625rem]">
                <img className="w-1.5" src={bracketOpen} alt="" />
                <span>{category}</span>
                <img className="w-1.5" src={bracketClose} alt="" />
              </div>

              <h3 className="mb-[4.0625rem] text-[1.625rem] md:mb-[2.125rem] xl:mb-[3.125rem] xl:text-[1.875rem]">
                {title}
              </h3>
              <img
                className="aspect-[16/10] rounded-[10px] object-cover"
                src={img}
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto grid max-w-[1440px] xl:grid-cols-3">
        <ul className="grid xl:col-span-2 xl:grid-cols-2">
          {PROJECTS.slice(2, 4).map(({ category, img, title }, i) => (
            <li
              key={i}
              className={cn(
                "flex flex-col border-b border-b-white/10 px-6 pb-6 pt-[1.875rem] xl:px-[1.375rem] xl:pb-[1.375rem] xl:pt-[4.375rem]",
                i === 0
                  ? "xl:border-r xl:border-r-white/10 min-[1462px]:pl-0"
                  : "",
              )}
            >
              <div className="mb-[0.6875rem] flex items-center gap-0.5 text-sm font-semibold xl:mb-5 xl:text-[1.0625rem]">
                <img className="w-1.5" src={bracketOpen} alt="" />
                <span>{category}</span>
                <img className="w-1.5" src={bracketClose} alt="" />
              </div>

              <h3 className="mb-[4.0625rem] text-[1.625rem] md:mb-[2.125rem] xl:mb-[3.125rem] xl:text-[1.875rem]">
                {title}
              </h3>
              <img
                className="mt-auto aspect-[16/10] rounded-[10px] object-cover"
                src={img}
                alt=""
              />
            </li>
          ))}
        </ul>

        <div className="w-full px-6 lg:px-8 xl:px-0">
          <Link to="/projects" className="group my-[1.375rem] flex w-full cursor-pointer items-center justify-center gap-5 rounded-[10px] bg-primary py-[3.75rem] text-matte-black transition-all duration-300 hover:scale-100 hover:rounded-none xl:my-0 xl:h-full xl:scale-[0.92] xl:py-0 xl:text-xl min-[1440px]:scale-100 min-[1440px]:scale-y-[0.92]">
            <p className="transition-transform duration-300 group-hover:translate-x-2">
              View all projects
            </p>
            <img
              className="h-[45px] w-[45px] transition-transform duration-300 group-hover:rotate-45"
              src={arrowRight}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
