import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <header className={styles["header__container"]}>
        <div className={styles["header__content"]}>
          <svg
            className={styles["header__logo"]}
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <path d="M 15 2 C 14.0425 2 13.085969 2.3652031 12.355469 3.0957031 L 9.9316406 5.5175781 L 15 10.585938 L 20.068359 5.5175781 L 17.646484 3.0957031 C 16.915984 2.3652031 15.9575 2 15 2 z M 8.5175781 6.9316406 L 3.0957031 12.353516 C 1.6347031 13.814516 1.6347031 16.183531 3.0957031 17.644531 L 5.5175781 20.066406 L 13.585938 12 L 8.5175781 6.9316406 z M 21.480469 6.9335938 L 16.414062 12 L 20.498047 16.085938 L 25.566406 11.017578 L 21.480469 6.9335938 z M 26.974609 12.441406 L 21.914062 17.5 L 24.482422 20.068359 L 26.904297 17.646484 C 28.338297 16.212484 28.356609 13.907406 26.974609 12.441406 z M 15 13.414062 L 6.9316406 21.482422 L 12.353516 26.904297 C 13.814516 28.365297 16.183531 28.365297 17.644531 26.904297 L 23.066406 21.482422 L 15 13.414062 z" />
          </svg>
          <h1 className={styles["header__title"]}>
            Introduction to Blockchain
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
