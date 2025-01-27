import Container from "@/components/Container";
import Marquee from "@/components/Marquee";
import { PROJECTS_MARQUEE } from "@/constants/MARQUEE";
import arrowRight from "@/assets/svg/arrow-right.svg";
import abstract from "@/assets/svg/abstract-2.svg";
import Button from "@/components/Button";
import Profile from "@/components/Profile";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/cn";

const Footer = () => {
  const [time, setTime] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const backToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        timeZone: "Africa/Accra",
      });

      setTime(timeString);
    };

    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer
      className={cn(
        "bg-black text-white",
        pathname === "contact" || pathname === "about" ? "footer" : "",
      )}
    >
      <Marquee marqueeArr={PROJECTS_MARQUEE} />

      <Container>
        <div className="flex items-center justify-between py-6 lg:py-8">
          <div className="flex items-center gap-2 text-sm md:text-[0.9375rem]">
            <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>{" "}
            <p>Available for freelance</p>
          </div>

          <button
            onClick={backToTopHandler}
            className="hidden items-center gap-3.5 text-[1.0625rem] text-grey md:flex"
          >
            Back to top
            <img className="-rotate-45" src={arrowRight} alt="" />
          </button>
        </div>
      </Container>

      <div className="border-b border-t border-b-white/10 border-t-white/10">
        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-[2.375rem] py-[3.125rem] text-center lg:gap-[3.125rem] lg:py-20 min-[1180px]:flex-row min-[1180px]:justify-between min-[1180px]:px-[3.75rem] min-[1180px]:py-[10rem] min-[1180px]:text-left 2xl:px-0">
          <img
            className="absolute left-0 top-0 hidden h-full min-[1180px]:block"
            src={abstract}
            alt=""
          />

          <div className="relative z-10 flex flex-col gap-[1.375rem] border-b border-b-white/10 px-6 pb-[2.375rem] lg:gap-10 lg:px-8 min-[1180px]:gap-[2.6875rem] min-[1180px]:border-b-transparent min-[1180px]:px-0 min-[1180px]:pb-0">
            <h2>
              Let&apos;s create something extraordinary together
              <span className="text-primary">.</span>
            </h2>
            <p className="text-lg font-semibold text-grey lg:text-xl min-[1180px]:text-[1.375rem]">
              Let&apos;s make an impact
            </p>
          </div>

          <div className="relative z-10">
            <div className="mx-auto w-fit min-[1180px]:mx-0">
              <Profile />
            </div>

            <div className="px-6 lg:px-8 min-[1180px]:px-0">
              <span className="mb-2.5 mt-[2.75rem] block text-sm font-semibold text-grey lg:mb-3.5 lg:text-[0.9375rem] min-[1180px]:mt-[4.375rem]">
                Contact me
              </span>
              <a
                href="mailto:israelrankin@gmail.com"
                className="link mb-[1.625rem] break-all text-[1.875rem] font-semibold leading-snug lg:mb-[2.6875rem] lg:text-4xl min-[1180px]:mb-9 min-[1180px]:text-[2.5rem] inline-block "
              >
                israelrankin<span className="text-primary">@</span>gmail.com
              </a>

              <p className="mx-auto mb-[2.75rem] max-w-[590px] text-lg font-semibold leading-snug text-grey lg:mb-[3.125rem] lg:text-xl min-[1180px]:mb-[4.375rem]">
                Hit me up if you&apos;re looking for a{" "}
                <span className="text-white">solid frontend developer</span> who
                can bring your vision to life.
              </p>

              <Button
                icon={arrowRight}
                onClick={() => navigate("/contact")}
                label="Contact me"
                className="w-[183px] text-left md:w-[190px]"
              />
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div className="flex flex-col justify-between gap-5 py-10 text-grey md:flex-row md:text-lg">
          <span>© 2025</span>

          <div className="flex items-center gap-4">
            <p>ACCRA, GHANA</p>

            <span className="inline-block w-[72px] text-white/80">{time}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
