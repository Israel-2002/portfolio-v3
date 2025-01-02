import Container from "@/components/Container";
import SubtitleText from "@/components/SubtitleText";
import asterisk from "@/assets/svg/asterisk.svg";
import quote from "@/assets/svg/quote.svg";
import { TESTIMONIALS } from "@/constants/TESTIMONIALS";

const Testimonials = () => {
  const testimonials = Array(24).fill(TESTIMONIALS).flat();

  return (
    <section className="bg-black pb-[3.125rem] pt-6 text-white/90 xl:pb-[8.125rem] xl:pt-[1.875rem]">
      <Container>
        <div className="text-center">
          <div className="mx-auto w-fit">
            <SubtitleText number="03" text="Testimonials" />
          </div>

          <h2 className="">
            Don&apos;t take my <br /> word for{" "}
            <span className="relative">
              it{" "}
              <img
                className="absolute -right-6 top-[20%] inline-block w-5 md:-right-8 md:w-7"
                src={asterisk}
                alt=""
              />
            </span>
          </h2>
          <p className="mb-10 mt-5 text-[0.9375rem] font-semibold text-grey xl:mb-[6.25rem] xl:mt-6 xl:text-[1.0625rem]">
            <span className="text-primary">*</span>Take theirs
          </p>
        </div>
      </Container>

      <div className="mask overflow-hidden">
        <ul className="testimonial-marquee flex w-max gap-[1.875rem]">
          {testimonials.map(({ name, image, position, testimonial }, i) => (
            <li
              key={i}
              className="flex w-fit max-w-[320px] max-h-[600px] flex-shrink-0 flex-col rounded-[14px] border border-white/10 p-6 xl:max-w-[423px] xl:p-[3rem]"
            >
              <img
                className="mb-10 ml-auto w-9 xl:w-[50px]"
                src={quote}
                alt=""
              />
              <p className="mb-[4.5rem] text-lg font-semibold leading-snug xl:text-xl">
                {testimonial}
              </p>

              <div className="mt-auto flex items-center gap-4 text-grey">
                <img
                  className="h-[46px] w-[46px] rounded-full object-cover"
                  src={image}
                  alt=""
                />
                <div>
                  <h4 className="xl:text-[1.0625rem] mb-0.5 text-[0.9375rem] font-bold">
                    {name}
                  </h4>
                  <h5 className="text-[0.9375rem]">
                    {position}
                  </h5>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
