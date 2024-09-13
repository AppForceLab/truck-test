import { createEquipment } from '../../../../utils/createEquipment';
import styles from './Equipment.module.css';
import styleParent from '../Options.module.css';
import { setActiveEquipment } from '../../../../utils/setActiveEquipment';
import { useEffect, useState } from 'react';

const Equipment = ({ onClickEquipment }) => {
  const [activeElements, setActiveElements] = useState([]);

  useEffect(() => {
    onClickEquipment(activeElements);
  }, [onClickEquipment, activeElements]);

  const handelClickEquioment = value => {
    setActiveEquipment({
      value,
      activeElements,
      setActiveElements,
    });
  };
  return (
    <ul className={`${styleParent.list_option} ${styles.list_mt_bt}`}>
      {createEquipment().map(({ id, value, text, svg }) => (
        <li
          key={id}
          className={`${styleParent.item_option} ${styles.item} ${
            activeElements.includes(value) && styleParent.active_item
          }`}
          onClick={() => handelClickEquioment(value)}
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

export default Equipment;