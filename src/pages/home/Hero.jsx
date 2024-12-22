import Button from "@/components/Button";
import Container from "@/components/Container";
import arrowRight from "@/assets/svg/arrow-right.svg";
import heroBg from "@/assets/images/home/hero-bg.png";

const Hero = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative md:max-h-[700px] bg-matte-white pb-14 pt-48 text-matte-black lg:h-screen"
    >
      <Container>
        <h1 className="font-medium text-white">
          Delivering Thoughtfully <br /> Built Web{" "}
          <span className="text-primary">Experiences</span>.
        </h1>

        <p className="mb-10 mt-5 max-w-[470px] text-lg min-[800px]:max-w-[700px] xl:text-xl">
          I build fast, responsive websites that prioritize seamless user
          experiences and modern design, ensuring every detail aligns with your
          goals.
        </p>

        <Button
          icon={arrowRight}
          label="See what I can do"
          className="w-[250px] text-left"
        />
      </Container>
    </header>
  );
};

export default Hero;
