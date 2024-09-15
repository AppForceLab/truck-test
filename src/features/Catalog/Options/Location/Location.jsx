import { useSelector } from 'react-redux';
import styles from './Location.module.css';
import { getAllCampers } from '../../../../redux/selectors';
import Icon from '../../Icon/Icon';

const Location = ({ onClickLocation }) => {
  const campers = useSelector(getAllCampers);
  const allLocations = [...new Set(campers.map(item => item.location))];

  const handelChange = e => {
    onClickLocation(e.target.value);
  };
  return (
    <div className={styles.select_location_container}>
    <select
      name="select"
      className={styles.select_location}
      onChange={handelChange}
    >
      <option value="">Please select location</option>
      {allLocations.map((name, idx) => (
        <option key={idx} value={name}>
           {name}
        </option>
      ))}
    </select>
      <div className={styles.select_location_icon}>
        <Icon name="city" width="18" height="18" />
      </div>
    </div>
  );
};

export default Location;