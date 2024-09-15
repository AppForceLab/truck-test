import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";
import styles from "./Features.module.css";
// import ListDetailsAdvert from 'components/ListDetailsAdvert';
import CamperDetails from "../../Catalog/CampersList/CamperDetails/CamperDetails";

const Features = ({
  vehicleDetails,
  transmission,
  engine,
  kitchen,
  ac,
  bathroom,
  tv,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
  details,
}) => {
  return (
    <div className={styles.wrap_features_options}>
      <CamperDetails
        transmission={transmission}
        engine={engine}
        kitchen={kitchen}
        ac={ac}
        bathroom={bathroom}
        tv={tv}
        radio={radio}
        refrigerator={refrigerator}
        microwave={microwave}
        gas={gas}
        water={water}
        details={details}
        idxEl={-1}
      />
      <h4 className={styles.subtitle_vehicle_details}>Vehicle details</h4>
      <div className={styles.line}></div>
      <ul className={styles.list}>
        {Object.keys(vehicleDetails).map((el) => (
          <li className={styles.item} key={vehicleDetails[el]}>
            <p className={styles.text_vehicle_details}>
              {capitalizeFirstLetter(el)}
            </p>
            <p className={styles.text_vehicle_details}>{vehicleDetails[el]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
