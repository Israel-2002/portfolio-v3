import Container from "@/components/Container";

const Hero = () => {
  return (
    <header className="relative pt-60">
      {/* <div className="bg-primary absolute top-0 hidden h-[85px] w-[85px] md:left-[109px] md:h-[109px] md:w-[109px] lg:block"></div>

      <div className="bg-primary absolute top-[109px] hidden h-[85px] w-[85px] md:left-0 md:h-[109px] md:w-[109px] lg:block"></div>

      <div className="bg-primary/60 absolute top-[218px] hidden h-[85px] w-[85px] md:left-[109px] md:h-[109px] md:w-[109px] lg:block"></div> */}

      <Container>
        <div className="grid grid-cols-3">
          <div></div>

          <div className="col-span-2">
            <h1>
              <span>Hi!</span> <span>I&apos;m</span>{" "}
              <span>Dornor Teye Israel</span>
              <span>Frontend Developer</span> from <span>Ghana</span>
              turning your ideas into pixel-perfect realities.
            </h1>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
