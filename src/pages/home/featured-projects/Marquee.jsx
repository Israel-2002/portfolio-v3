import { PROJECTS_MARQUEE } from "@/constants/MARQUEE";
import asterisk from "@/assets/svg/asterisk.svg";

const marquee = Array(24).fill(PROJECTS_MARQUEE).flat()
console.log(marquee);


const Marquee = () => {
  return (
    <div className="overflow-hidden bg-matte-black py-[1.125rem] text-[2.125rem] font-semibold text-white">
      <ul className="marquee flex w-max items-center gap-[4.375rem]">
        {marquee.map(({ number, text }, i) => (
          <li
            key={i}
            className="flex flex-shrink-0 items-center gap-[4.375rem]"
          >
            <div>
              <span className="text-primary">{number} /</span> {text}
            </div>

            <img src={asterisk} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
