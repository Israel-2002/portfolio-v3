import cresents from "@/assets/svg/cresents.svg";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiTelegram2Line,
} from "@remixicon/react";

const Profile = () => {
  return (
    <div className="flex gap-5 min-[375px]:gap-8 text-left xl:gap-[1.625rem]">
      <div className="flex items-center">
        <img className="scale-95 md:scale-100" src={cresents} alt="" />
        <div className="-ml-0.5 h-[70px] w-[70px] rounded-full bg-primary md:-ml-0 xl:h-[90px] xl:w-[90px]"></div>
      </div>

      <div>
        <h3 className="split mb-0.5 text-lg font-semibold xl:text-[1.375rem]">
          Dornor Teye Israel
        </h3>
        <span className="split mb-[1.125rem] inline-block text-[0.9375rem] font-semibold text-grey">
          Frontend Developer
        </span>

        <div className="flex items-center gap-3.5 text-grey">
          <a href="https://github.com/Israel-2002" target="_blank">
            <RiGithubLine className="hover:text-primary" />
          </a>

          <a
            href="https://www.linkedin.com/in/israel-teye-dornor-5ba88725b"
            target="_blank"
          >
            <RiLinkedinLine className="hover:text-primary" />
          </a>

          <a href="https://t.me/kiki1187" target="_blank">
            <RiTelegram2Line className="hover:text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
