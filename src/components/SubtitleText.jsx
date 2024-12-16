import PropTypes from "prop-types";

const SubtitleText = ({ number, text }) => {
  return (
    <div className="mb-3.5 flex items-center gap-1">
      <div className="bg-primary shadow-primary/50 h-4 w-4 rounded-full shadow-lg"></div>
      <span className="text-grey text-[0.8125rem] font-semibold tracking-tight lg:text-sm xl:text-lg">
        {`{${number}}`} — {text}
      </span>
    </div>
  );
};

SubtitleText.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default SubtitleText;
