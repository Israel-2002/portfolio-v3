import Container from "@/components/Container";
import img from "@/assets/images/izzy.jpeg";
import {
  RiLinkedinLine,
  RiTelegram2Line,
  RiTwitterXLine,
} from "@remixicon/react";
import Button from "@/components/Button";
import arrowRight from "@/assets/svg/arrow-right.svg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8F8F8] pb-[3.75rem] pt-32 lg:pb-[5.625rem] lg:pt-[11.125rem] xl:pb-[10rem] xl:pt-[12.375rem]">
      <Container>
        <div className="mb-[2.375rem] grid gap-3 md:mb-[3.75rem] lg:gap-4 xl:mb-20">
          <div className="flex w-fit items-center gap-2 text-sm font-semibold text-[#2F2F2F80] md:text-[0.9375rem]">
            <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>{" "}
            <p>Available for freelance</p>
          </div>

          <h2 className="page-title">About me</h2>
        </div>

        <div className="grid items-start gap-10 font-semibold text-[#2f2f2f] lg:gap-[2.875rem] xl:grid-cols-2">
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-6">
            <img className="h-[75px] w-[75px] rounded-full" src={img} alt="" />

            <div className="grid gap-6 lg:gap-[1.125rem]">
              <a
                href="mailto:israelrankin@gmail.com"
                className="link w-fit text-2xl lg:order-2 lg:text-[1.875rem] after:bg-[#2f2f2f]"
              >
                israelrankin@gmail.com
              </a>

              <p className="leading-snug text-[#2f2f2f99] lg:order-3 lg:max-w-[700px] lg:text-lg lg:leading-tight">
                I create clean, user-friendly websites designed to enhance your
                digital experience, ensuring both functionality and aesthetics
                work seamlessly to meet your needs.
              </p>

              <div className="flex items-center gap-2.5 text-grey lg:order-1">
                <a
                  href="https://www.linkedin.com/in/israel-teye-dornor-5ba88725b"
                  target="_blank"
                >
                  <RiLinkedinLine className="hover:text-primary" />
                </a>

                <a href="https://t.me/kiki1187" target="_blank">
                  <RiTelegram2Line className="hover:text-primary" />
                </a>

                <a href="https://x.com/Dreing16" target="_blank">
                  <RiTwitterXLine className="hover:text-primary" />
                </a>
              </div>

              <Button
                icon={arrowRight}
                onClick={() => navigate("/contact")}
                label="Contact me"
                className="mt-2.5 w-full text-left text-lg lg:order-4 lg:mt-4 lg:w-[200px]"
              />
            </div>
          </div>

          <div className="grid gap-5 text-lg font-semibold leading-tight lg:gap-[1.75rem] lg:text-[1.3125rem] lg:leading-snug">
            <p>
              Hi, I&apos;m Israel, a passionate web developer with a focus on
              creating visually stunning and highly functional digital
              experiences. With a strong background in front-end development, I
              specialize in building responsive, interactive websites that not
              only look great but also perform seamlessly across all devices,
              ensuring an optimal user experience every time.
            </p>

            <p className="text-[#2f2f2f99]">
              Over the years, I&apos;ve had the privilege of working with a
              diverse range of clients, from startups to well-established
              brands, helping them bring their unique visions to life online
              through innovative and tailored web solutions.
            </p>

            <p>
              Let&apos;s create something amazing together! I&apos;m eager to
              help bring your vision to life with a website that looks great,
              works flawlessly, and stands out in the digital world.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
