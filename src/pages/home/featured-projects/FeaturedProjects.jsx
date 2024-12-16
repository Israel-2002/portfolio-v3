import Header from "@/pages/home/featured-projects/Header";
import Marquee from "@/pages/home/featured-projects/Marquee";
import Projects from "@/pages/home/featured-projects/Projects";

const FeaturedProjects = () => {
  return (
    <section>
      <Marquee />
      <Header />
      <Projects />
    </section>
  );
};

export default FeaturedProjects;
