import Marquee from "@/components/Marquee";
import { PROJECTS_MARQUEE } from "@/constants/MARQUEE";
import Header from "@/pages/home/featured-projects/Header";
import Projects from "@/pages/home/featured-projects/Projects";

const FeaturedProjects = () => {
  return (
    <section>
      <Marquee marqueeArr={PROJECTS_MARQUEE} />
      <Header />
      <Projects />
    </section>
  );
};

export default FeaturedProjects;
