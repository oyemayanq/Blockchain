import styles from "./navbar.module.css";

function Navbar({ handleClick }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar__list"]}>
        <li onClick={() => handleClick(1)} className={styles["navbar__item"]}>
          <div className={styles["item__dot"]}></div>
          <p>Overview</p>
        </li>
        <li onClick={() => handleClick(2)} className={styles["navbar__item"]}>
          <div className={styles["item__dot"]}></div>
          <p>Currency Exhange Calculator</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
