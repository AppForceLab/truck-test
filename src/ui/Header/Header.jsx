import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
      <Link className={styles.logo} to="/">
        <img src="src/assets/img/logo.svg" alt="Truck logo" />
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#d84343" : "#101828",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#d84343" : "#101828",
              })}
              to="/catalog"
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;
