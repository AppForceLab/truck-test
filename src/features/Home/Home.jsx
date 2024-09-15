import styles from "./Home.module.css";
import LinkButton from "../../ui/LinkButton/LinkButton";

const Home = () => {
  return (
    <main className={styles.wrap_hero}>
      <div className={styles.container}>
      <div className={styles.wrap_hero_title}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.text}>
          You can find everything you want in our catalog
        </p>
      </div>
      <LinkButton to="/catalog" type="primary">
        View Now
      </LinkButton>
      </div>
    </main>
  );
};

export default Home;
