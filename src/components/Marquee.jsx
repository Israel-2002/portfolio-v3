import PropTypes from "prop-types";
import asterisk from "@/assets/svg/asterisk.svg";

const Marquee = ({ marqueeArr }) => {
  const marquee = Array(24).fill(marqueeArr).flat();

  return (
    <div className="overflow-hidden bg-matte-black py-[1.125rem] text-xl font-semibold text-white md:text-2xl xl:text-3xl">
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

Marquee.propTypes = {
  marqueeArr: PropTypes.array,
};

export default Marquee;
