import CamperDetailsItem from "../CamperDetailsItem/CamperDetailsItem";
import Icon from "../../../Catalog/Icon/Icon";
import styles from "./CamperDetails.module.css";
import {capitalizeFirstLetter} from "../../../../utils/capitalizeFirstLetter";

function CamperDetails({ transmission, engine, kitchen, ac, bathroom, tv }) {
  const details_arr = [];
  
  if (transmission) {
    details_arr.push({ text: capitalizeFirstLetter(transmission) , icon: "automatic" });
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

export default CamperDetails;
