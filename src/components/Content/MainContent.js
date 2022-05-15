import { useEffect, useRef } from "react";

import styles from "./main-content.module.css";

import { DATA } from "../../data/data";
import Article from "../Ui/Article";

function MainContent({ currentArticle, handleScroll }) {
  const mainRef = useRef();
  return (
    <main id="main-content" ref={mainRef} className={styles.main}>
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
          <section
            id={newTitle}
            data-article={idx}
            className={styles["main__section"]}
            key={idx}
          >
            <Article title={data.title} content={data.content} />
          </section>
        );
      })}
    </main>
  );
}

export default MainContent;
