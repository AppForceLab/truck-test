import styles from './CamperDetailsItem.module.css';

const CamperDetailsItem = ({children, svg}) => {
  return (
    <li className={styles.item_details}>
      {svg}
      <p className={styles.text_details}>{children}</p>
    </li>
  )
}

export default CamperDetailsItem