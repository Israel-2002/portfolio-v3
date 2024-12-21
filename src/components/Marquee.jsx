import PropTypes from "prop-types";
import asterisk from "@/assets/svg/asterisk.svg";

const Marquee = ({ marqueeArr }) => {
  const marquee = Array(24).fill(marqueeArr).flat();

  return (
    <div className="grid h-20 place-items-center overflow-hidden bg-matte-black text-[1.625rem] font-semibold text-white md:text-2xl lg:h-[100px] lg:text-[2.125rem] xl:text-3xl">
      <ul className="marquee flex w-max items-center gap-8 lg:gap-[4.375rem]">
        {marquee.map(({ number, text }, i) => (
          <li
            key={i}
            className="flex flex-shrink-0 items-center gap-8 lg:gap-[4.375rem]"
          >
            <div>
              <span className="text-primary">{number} /</span> {text}
            </div>

            <img
              className="h-[26px] w-[26px] lg:h-[32px] lg:w-[32px]"
              src={asterisk}
              alt=""
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

Marquee.propTypes = {
  marqueeArr: PropTypes.array,
};

export default Marquee;
