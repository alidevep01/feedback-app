import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <>
      <header>My App</header>
      <h1>{text}</h1>
    </>
  );
}

Header.defaultProps = {
  text: "This is default text",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
