import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCampers } from "../../redux/catalogSlice";
import styles from "./Catalog.module.css";
import CampersList from './CampersList/CampersList';
import Options from "./Options/Options";

function Catalog() {
  const campers = useLoaderData();
  const dispatch = useDispatch();
  dispatch(setCampers(campers));

  return (
    <main className={styles.container}>
      <Options />
      <CampersList catalog={campers.items} />
    </main>
  );
}

export default Catalog;
