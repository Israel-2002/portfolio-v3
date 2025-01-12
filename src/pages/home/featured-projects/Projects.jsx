import { PROJECTS } from "@/constants/PROJECTS";
import { cn } from "@/lib/cn";
import BracketOpen from "@/assets/svg/bracket-open.svg?react";
import BracketClose from "@/assets/svg/bracket-close.svg?react";
import arrowRight from "@/assets/svg/arrow-right.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="work" className="bg-black text-white">
      <div className="lg:border-b lg:border-b-white/10">
        <ul className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          {PROJECTS.slice(0, 2).map(({ category, img, title }, i) => (
            <li
              key={i}
              className={cn(
                "border-b border-b-white/10 px-6 pb-6 pt-[1.875rem] lg:border-b-transparent lg:px-[1.375rem] lg:pb-[1.375rem] lg:pt-[4.375rem]",
                i === 0
                  ? "lg:border-r lg:border-r-white/10 min-[1462px]:pl-0"
                  : "min-[1462px]:pr-0",
              )}
            >
              <div className="mb-[0.6875rem] flex items-center gap-0.5 text-sm font-semibold lg:mb-5 lg:text-[1.0625rem]">
                <BracketOpen className="text-primary" />
                {category}
                <BracketClose className="text-primary" />
              </div>

              <h3 className="mb-[4.0625rem] text-[1.625rem] md:mb-[2.125rem] lg:mb-[3.125rem] lg:text-[1.875rem]">
                {title}
              </h3>

              <div className="aspect-[16/10] overflow-hidden rounded-[10px]">
                <img className="h-full w-full object-cover" src={img} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-3">
        <ul className="grid lg:col-span-2 lg:grid-cols-2">
          {PROJECTS.slice(2, 4).map(({ category, img, title }, i) => (
            <li
              key={i}
              className={cn(
                "flex flex-col border-b border-b-white/10 px-6 pb-6 pt-[1.875rem] lg:px-[1.375rem] lg:pb-[1.375rem] lg:pt-[4.375rem]",
                i === 0
                  ? "lg:border-r lg:border-r-white/10 min-[1462px]:pl-0"
                  : "",
              )}
            >
              <div className="mb-[0.6875rem] flex items-center gap-0.5 text-sm font-semibold lg:mb-5 lg:text-[1.0625rem]">
                <BracketOpen className="text-primary" />
                {category}
                <BracketClose className="text-primary" />
              </div>

              <h3 className="mb-[4.0625rem] text-[1.625rem] md:mb-[2.125rem] lg:mb-[3.125rem] lg:text-[1.875rem]">
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

        <div className="w-full ">
          <Link
            to="/projects"
            className="group my-[1.375rem] flex w-full cursor-pointer items-center justify-center gap-5 rounded-[10px] bg-primary py-[3.75rem] text-white transition-all duration-300 hover:scale-100 hover:rounded-none lg:my-0 lg:h-full lg:scale-[0.92] lg:py-0 lg:text-lg min-[1440px]:scale-100 min-[1440px]:scale-y-[0.92]"
          >
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
