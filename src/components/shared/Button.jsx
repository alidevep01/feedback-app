import PropTypes from "prop-types";

function Button({ children, type, isDisabled, version }) {
  return (
    <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  isDisabled: false,
  version: "primary",
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  version: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
