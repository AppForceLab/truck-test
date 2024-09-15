import PropTypes from "prop-types";
import CamperItem from "./CamperItem/CamperItem";
import styles from "./CampersList.module.css";
import ScrollToTop from "react-scroll-to-top";

const CampersList = ({ catalog, className = "" }) => {
  return (
    <>
      <ul className={`${styles.list} ${className}`}>
        <CamperItem catalog={catalog} />
      </ul>
      <ScrollToTop smooth />
    </>
  );
};

CampersList.propTypes = {
  catalog: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default CampersList;
