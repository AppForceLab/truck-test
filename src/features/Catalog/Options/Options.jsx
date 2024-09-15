import styles from "./Options.module.css";
import VehicleType from "./VehicleType/VehicleType";
import Equipment from "./Equipment/Equipment";
import Location from "./Location/Location";
import { useState } from "react";
import LinkButton from "../../../ui/LinkButton/LinkButton";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/catalogSlice";

const Options = () => {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState([]);
  const dispatch = useDispatch();
  const getType = (form) => {
    setType(form);
  };

  const getLocation = (value) => {
    setLocation(value);
  };

  const getEquipment = (arr) => {
    setEquipment(arr);
  };

  const handlerClick = (e) => {
    e.preventDefault();

  const newType = type==='van'?'panelTruck':type;

    const filter = {
      location: location,
      equipment: equipment,
      type: newType,
    };
    dispatch(setFilter(filter));
  };

  return (
    <div className={styles.wrap_options}>
      <p className={styles.subtitle_location}>Location</p>
      <Location onClickLocation={getLocation} />
      <p className={styles.subtitle_filter}>Filters</p>
      <h4 className={styles.title_options}>Vehicle equipment</h4>
      <div className={styles.line}></div>
      <Equipment onClickEquipment={getEquipment} />
      <h4 className={styles.title_options}>Vehicle type</h4>
      <div className={styles.line}></div>
      <VehicleType onClickType={getType} />
      <LinkButton onClick={handlerClick} type="search">
        Search
      </LinkButton>
    </div>
  );
};

export default Options;
