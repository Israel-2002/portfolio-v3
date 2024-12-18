import { cn } from "@/lib/cn";
import PropTypes from "prop-types";

const SubtitleText = ({ number, text, noShadow }) => {
  return (
    <div className="mb-3.5 flex items-center gap-1">
      <div
        className={cn(
          "h-4 w-4 rounded-full bg-primary",
          !noShadow ? "shadow-lg shadow-primary/50" : "",
        )}
      ></div>

      <span className="text-[0.8125rem] font-semibold tracking-tight text-grey lg:text-sm xl:text-lg">
        {`{${number}}`} — {text}
      </span>
    </div>
  );
};

SubtitleText.propTypes = {
  number: PropTypes.string,
  text: PropTypes.string,
  noShadow: PropTypes.bool,
};

export default SubtitleText;
