import Container from "@/components/Container";
import SubtitleText from "@/components/SubtitleText";
import { TECHSTACK } from "@/constants/TECHSTACK";

const TechStack = () => {
  return (
    <section className="bg-[#f8f8f8] py-[3.125rem] lg:py-[10rem]">
      <Container>
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-[1.875rem] min-[1180px]:flex-row">
          <div className="mx-auto w-fit text-center lg:top-20 min-[1180px]:sticky min-[1180px]:mx-0 min-[1180px]:text-left">
            <div className="mx-auto w-fit min-[1180px]:mx-0">
              <SubtitleText noShadow number="02" text="Tech Stack" />
            </div>

            <h2 className="split split-padding">
              Technologies I use
            </h2>
          </div>

          <ul className="mx-auto grid w-fit gap-6 min-[1180px]:mx-0 min-[1180px]:flex-shrink-0">
            {TECHSTACK.map(({ icon, name, description }, i) => (
              <li
                key={i}
                className="sticky top-5 flex w-full max-w-[520px] gap-[1.5rem] rounded-[14px] bg-white px-6 py-10 font-semibold shadow-md shadow-primary/5 min-[400px]:p-10 lg:top-20 lg:mx-0 lg:max-w-[920px]"
              >
                <img
                  src={icon}
                  alt="name"
                  className="h-[42px] w-[42px] lg:h-[50px] lg:w-[50px]"
                />
                <div>
                  <h4 className="mb-2.5 text-lg text-[#2f2f2f]">{name}</h4>
                  <p className="text-[0.9375rem] text-[#2f2f2f]/50 lg:text-base">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default TechStack;
