import clsx from "clsx";
import PropTypes from "prop-types";
import _styles from "./_styles.module.css";

function OutlinedButton(props) {
  const { startIcon, endIcon, onClick, children, className, type, color } = props;
  const Icon = endIcon || startIcon;

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(_styles.button, className, {
        [_styles.secondary]: color === "secondary",
        [_styles.primary]: color === "primary",
      })}>
      {startIcon && <Icon className={_styles.icon} />}
      {children}
      {endIcon && <Icon className={_styles.icon} />}
    </button>
  );
}

OutlinedButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  endIcon: PropTypes.elementType,
  startIcon: PropTypes.elementType,
  color: PropTypes.oneOf(["primary", "secondary"]),
};

OutlinedButton.defaultProps = {
  type: "button",
};

export default OutlinedButton;
