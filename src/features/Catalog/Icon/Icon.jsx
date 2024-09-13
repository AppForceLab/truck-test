import sprite from '../../../assets/img/icons.svg';
import styles from './Icon.module.css';

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

export default Icon;