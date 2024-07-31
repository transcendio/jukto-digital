import PropTypes from "prop-types";

const ArrowRightIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      className={className}>
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};
ArrowRightIcon.propTypes = {
  className: PropTypes.string,
};

export default ArrowRightIcon;
