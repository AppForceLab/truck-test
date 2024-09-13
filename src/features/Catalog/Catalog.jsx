import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCampers } from "../../redux/catalogSlice";
import styles from "./Catalog.module.css";
// import CampersList from './CampersList';
import Options from "./Options/Options";

function Catalog() {
  const campers = useLoaderData();
  const dispatch = useDispatch();

  dispatch(setCampers(campers));

  console.log(campers);
  return (
    <main className={styles.container}>
      <Options />
      {/* <CampersList campers={campers} /> */}
    </main>
  );
}

export default Catalog;
