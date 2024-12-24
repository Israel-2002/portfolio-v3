import Button from "@/components/Button";
import Container from "@/components/Container";
import arrowRight from "@/assets/svg/arrow-right.svg";
import heroBg from "@/assets/images/home/hero-bg.png";
import ReactCurvedText from "react-curved-text";

const Hero = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative bg-matte-white pb-14 pt-48 text-matte-black md:max-h-[700px] lg:h-screen"
    >
      <Container>
        <div className="relative">
          <h1 className="font-medium text-white max-w-[680px] md:max-w-none">
            Delivering Thoughtfully <br className="hidden md:block"/> Built Web{" "}
            <span className="text-primary">Experiences</span>.
          </h1>

          <p className="mb-10 mt-5 max-w-[470px] text-lg min-[800px]:max-w-[700px] xl:text-xl">
            I build fast, responsive websites that prioritize seamless user
            experiences and modern design, ensuring every detail aligns with
            your goals.
          </p>

          <Button
            icon={arrowRight}
            label="See what I can do"
            className="w-[250px] text-left"
          />

          <div className="absolute top-[30%] xl:top-[35%] right-[2%] hidden scale-[0.6] md:block lg:right-[8%] lg:scale-[0.7] xl:right-[15%]">
            <ReactCurvedText
              width={300}
              height={300}
              cx={150}
              cy={150}
              rx={60}
              ry={60}
              startOffset={0}
              reversed={true}
              svgProps={{ className: "rotating-curved-text" }}
              text="FRONTEND DEVELOPER • FRONTEND DEVELOPER • "
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
