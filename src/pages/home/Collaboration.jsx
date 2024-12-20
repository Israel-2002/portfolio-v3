import Container from "@/components/Container";
import Marquee from "@/components/Marquee";
import { PROJECTS_MARQUEE } from "@/constants/MARQUEE";

const Collaboration = () => {
  return (
    <section className="overflow-hidden">
      <Marquee marqueeArr={PROJECTS_MARQUEE} />
      <div className="bg-black pb-[3.125rem] pt-[3.75rem] text-white/90 xl:pb-[8.125rem] xl:pt-[10rem]">
        <Container>
          <h3 className="max-w-[1100px]">
            Thanks for stopping by, I&apos;m seeking to join a dynamic team of
            talented professionals in design and development. If you believe
            we&apos;d make a great team, feel free to send me an{" "}
            <a className="text-primary" href="mailto:israelrankin@gmail.com">
              email 📧
            </a>
            .
          </h3>
        </Container>
      </div>
    </section>
  );
};

export default Collaboration;
