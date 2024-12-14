import { cn } from "@/lib/cn";
import PropTypes from "prop-types";

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn("rounded-full bg-black px-6 py-3 text-white", className)}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
