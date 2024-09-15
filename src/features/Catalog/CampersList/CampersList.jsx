import CamperItem from "./CamperItem/CamperItem";
import styles from "./CampersList.module.css";

const CampersList = ({ catalog, className = "" }) => {
  return (
    <>
      <ul className={`${styles.list} ${className}`}>
        <CamperItem catalog={catalog} />
      </ul>
    </>
  );
};

export default CampersList;
