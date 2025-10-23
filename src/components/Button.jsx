import { cn } from "@/lib/cn";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  label,
  onClick,
  className,
  icon,
  disabled = false,
  isLoading,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "rounded-full bg-primary py-5 font-medium text-white md:text-lg",
        icon
          ? "group relative flex items-center gap-2 pl-7 shadow-2xl shadow-primary/20 transition-shadow duration-300 hover:shadow-none"
          : "px-7",
        className,
      )}
    >
      {label}{" "}
      {icon && typeof icon === "string" ? (
        <img
          className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 transition-all duration-300 group-hover:rotate-45"
          src={icon}
          alt=""
        />
      ) : (
        isLoading && icon
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
