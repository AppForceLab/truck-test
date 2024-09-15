import PropTypes from "prop-types";
import sprite from "../../assets/img/icons.svg";
import styles from "./Icon.module.css";

const Icon = ({ name, height, width, className, onClick }) => {
  return (
    <svg
      className={`${className} ${styles.icon}`}
      height={height}
      width={width}
      aria-label={name}
      onClick={onClick}
    >
      <use href={`${sprite}#icon-${name}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
