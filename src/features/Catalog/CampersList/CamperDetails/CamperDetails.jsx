import PropTypes from "prop-types";
import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter";
import CamperDetailsItem from "../CamperDetailsItem/CamperDetailsItem";
import Icon from "../../../../ui/Icon/Icon";
import styles from "./CamperDetails.module.css";

function CamperDetails({
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
}) {
  const details_arr = [];

  if (transmission) {
    details_arr.push({
      text: capitalizeFirstLetter(transmission),
      icon: "automatic",
    });
  }
  if (engine) {
    details_arr.push({ text: capitalizeFirstLetter(engine), icon: "petrol" });
  }
  if (kitchen) {
    details_arr.push({ text: "Kitchen", icon: "kitchen" });
  }
  if (ac) {
    details_arr.push({ text: "AC", icon: "ac" });
  }
  if (bathroom) {
    details_arr.push({ text: "Bathroom", icon: "bathroom" });
  }
  if (tv) {
    details_arr.push({ text: "TV", icon: "tv" });
  }
  if (radio) {
    details_arr.push({ text: "Radio", icon: "radio" });
  }
  if (refrigerator) {
    details_arr.push({ text: "Refrigerator", icon: "refrigerator" });
  }
  if (microwave) {
    details_arr.push({ text: "Microwave", icon: "microwave" });
  }
  if (gas) {
    details_arr.push({ text: "Gas", icon: "gas" });
  }
  if (water) {
    details_arr.push({ text: "Water", icon: "water" });
  }

  return (
    <ul className={styles.wrap_list_details}>
      {details_arr &&
        details_arr.map((el) => {
          return (
            <CamperDetailsItem
              svg={<Icon width="20" height="20" name={el.icon} />}
              key={el.text}
            >
              {el.text}
            </CamperDetailsItem>
          );
        })}
    </ul>
  );
}

CamperDetails.propTypes = {
  transmission: PropTypes.string,
  engine: PropTypes.string,
  kitchen: PropTypes.bool,
  ac: PropTypes.bool,
  bathroom: PropTypes.bool,
  tv: PropTypes.bool,
  radio: PropTypes.bool,
  refrigerator: PropTypes.bool,
  microwave: PropTypes.bool,
  gas: PropTypes.bool,
  water: PropTypes.bool,
};

export default CamperDetails;
