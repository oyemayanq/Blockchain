import styles from "./sidebar.module.css";

import { DATA } from "../../data/data";

function Sidebar({ currentArticle, handleClick }) {
  return (
    <aside id="sidebar" className={styles.sidebar}>
      <ul className={styles["sidebar__list"]}>
        {DATA.map((data, idx) => {
          let newTitle = "";
          for (let i = 0; i < data.title.length; i++) {
            if (data.title[i] === " ") {
              newTitle += "-";
            } else {
              newTitle += data.title[i].toLowerCase();
            }
          }
          return (
            <li
              data-link={newTitle}
              onClick={(e) => {
                handleClick(idx);
              }}
              className={`${styles["sidebar__list-item"]} ${
                currentArticle === idx
                  ? styles["sidebar__list-item--active"]
                  : styles["sidebar__list-item--inactive"]
              }`}
              key={idx}
            >
              <a href={`#${newTitle}`} className={styles["item__link"]}>
                {data.title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
