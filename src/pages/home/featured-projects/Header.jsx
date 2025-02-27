import Button from "@/components/Button";
import Container from "@/components/Container";
import SubtitleText from "@/components/SubtitleText";
import arrowRight from "@/assets/svg/arrow-right.svg";
import ace from "@/assets/svg/ace.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="relative overflow-hidden border-b border-b-white/10 bg-black pb-[3.125rem] pt-[3.75rem] text-white xl:pb-[8.125rem] xl:pt-[10rem]">
      <Container>
        <SubtitleText number="01" text="Featured projects" />

        <h2 className="split mb-9 xl:mb-[4.25rem]">
          I craft websites with <br className="hidden md:block" /> attention to
          detail.
        </h2>

        <Button
          icon={arrowRight}
          onClick={() => navigate('/contact')}
          label="Let's work together"
          className="w-[235px] text-left md:w-[260px]"
        />

        <img
          className="absolute right-0 top-0 h-[523px] w-[523px] xl:h-[1024px] xl:w-[1024px]"
          src={ace}
          alt=""
        />
      </Container>
    </div>
  );
};

export default Header;
