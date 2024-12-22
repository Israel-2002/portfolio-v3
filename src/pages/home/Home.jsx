import Hero from "@/pages/home/Hero";
import Collaboration from "@/pages/home/Collaboration";
import FeaturedProjects from "@/pages/home/featured-projects/FeaturedProjects";
import Socials from "@/pages/home/Socials";
import TechStack from "@/pages/home/TechStack";
import Testimonials from "@/pages/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <Collaboration />
      <Testimonials />
      <Socials />
    </>
  );
};

export default Home;
