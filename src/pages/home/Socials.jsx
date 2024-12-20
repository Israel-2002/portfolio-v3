import Container from "@/components/Container";
import SubtitleText from "@/components/SubtitleText";
import abstract from "@/assets/svg/abstract.svg";
import { SOCIALS } from "@/constants/SOCIALS";
import { cn } from "@/lib/cn";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <section className="relative bg-[#F8F8F8] pb-[3.125rem] pt-[3.75rem] xl:py-[10rem]">
      <img className="absolute left-0 top-0" src={abstract} alt="" />

      <Container>
        <div className="relative z-10">
          <SubtitleText noShadow number="04" text="Contact me" />
          <h2 className="mb-[2.1875rem] text-[#2F2F2F] lg:mb-10 xl:mb-20">
            I&apos;m all over <br className="lg:hidden" /> the internet
          </h2>

          <ul className="grid gap-[1.125rem] sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SOCIALS.map(({ icon: Icon, name, url }, i) => {
              const lastItem = i === SOCIALS.length - 1;

              const className = "flex flex-col h-full gap-[3.125rem] p-10";

              return (
                <li
                  key={i}
                  className={cn(
                    "group rounded-[14px] font-semibold text-[#2f2f2f] xl:text-xl",
                    lastItem
                      ? "bg-primary sm:col-span-2 lg:col-span-1"
                      : "bg-white",
                  )}
                >
                  {!lastItem ? (
                    <a className={className} href={url} target="_blank">
                      {name}

                      <div className="ml-auto grid h-[52px] w-[52px] place-items-center rounded-full bg-primary">
                        <Icon className="transition-transform duration-500 group-hover:rotate-180" />
                      </div>
                    </a>
                  ) : (
                    <Link className={className} to={url}>
                      <span className="transition-transform duration-500 group-hover:translate-x-5">
                        {name}
                      </span>

                      <img
                        className="ml-auto transition-transform duration-500 group-hover:-translate-x-5 group-hover:-translate-y-5 lg:mt-auto"
                        src={Icon}
                        alt=""
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Socials;
