import { createVehicleType } from '../../../../utils/createVehicleType';
import styles from './VehicleType.module.css';
import styleParent from '../Options.module.css';
import { setActiveVehType } from '../../../../utils/setActiveVehType';
import { useEffect, useState } from 'react';

const VehicleType = ({ onClickType }) => {
  const [activeType, setActiveType] = useState('');

  useEffect(() => {
    onClickType(activeType);
  }, [onClickType, activeType]);

  const handelTypeClick = value => {
    setActiveVehType({
      value,
      activeTypeCar: activeType,
      setActiveTypeCar: setActiveType,
    });
  };
  return (
    <ul className={styleParent.list_option}>
      {createVehicleType().map(({ id, value, text, svg }) => (
        <li
          key={id}
          data-name={value}
          className={`${styleParent.item_option} ${styles.item} ${
            activeType === value && styleParent.active_item
          }`}
          onClick={() => handelTypeClick(value)}
        >
          <button
            className={styleParent.btn_option}
            type="button"
            data-name={value}
          >
            {svg}
            <p className={styleParent.btn_text}>{text}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default VehicleType;