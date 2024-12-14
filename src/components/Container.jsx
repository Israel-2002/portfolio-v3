import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1440px] px-6 lg:px-8 xl:px-[3.75rem] 2xl:px-0">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
