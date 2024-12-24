import Container from "@/components/Container";
import { PROJECTS } from "@/constants/PROJECTS";

const Projects = () => {
  return (
    <div className="pb-[3.25rem] pt-32 md:pt-[11.25rem] lg:pb-[5.625rem] xl:pb-[10rem] xl:pt-[14.375rem]">
      <Container>
        <div className="mb-[2.375rem] grid gap-3 text-center md:mb-[3.75rem] lg:gap-4 xl:mb-20">
          <div className="mx-auto flex w-fit items-center gap-2 text-sm font-semibold text-[#2F2F2F80] md:text-[0.9375rem]">
            <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>{" "}
            <p>Available for freelance</p>
          </div>

          <h2 className="page-title">Selected Work</h2>
        </div>

        <ul className="mx-auto grid max-w-[1100px] gap-[4.375rem] text-[#2F2F2F] lg:gap-[5.625rem] xl:gap-[8.75rem]">
          {PROJECTS.map(({ title, category, description, img }, i) => (
            <li key={i}>
              <img
                className="mb-8 rounded-[14px] lg:mb-[3.125rem] xl:mb-[4.375rem]"
                src={img}
                alt=""
              />

              <span className="mb-[1.125rem] inline-block text-sm font-semibold lg:text-[1.0625rem]">
                {category}
              </span>

              <h3 className="mb-5 text-[2rem] leading-tight lg:mb-6 lg:text-[2.875rem] xl:mb-[1.75rem] xl:text-[3.75rem]">
                {title}
              </h3>

              <p className="text-lg font-semibold leading-tight text-[#2F2F2F80] lg:text-xl xl:text-[1.375rem]">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Projects;
