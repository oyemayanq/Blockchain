import { useState, useRef } from "react";

import styles from "./container.module.css";
import MainContent from "../Content/MainContent";
import Sidebar from "../Content/Sidebar";
import Navbar from "./Navbar";
import CurrencyConverter from "./CurrencyConverter";

function Container({ containerRef }) {
  const [currentArticle, setCurrentArticle] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);
  const mainRef = useRef();

  const changeArticleHandler = (idx) => {
    setTimeout(() => {
      setCurrentArticle(idx);
    }, 300);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 2:
        return <CurrencyConverter />;
      case 1:
      default:
        return (
          <div className={styles["container__content"]}>
            <Sidebar
              currentArticle={currentArticle}
              handleClick={changeArticleHandler}
            />
            <MainContent handleScroll={(idx) => setCurrentArticle(idx)} />
          </div>
        );
    }
  };

  const changeSection = (idx) => {
    const container = mainRef.current;
    if (idx === 2) {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setCurrentSection(idx);
  };

  return (
    <div id="container" ref={mainRef} className={styles.container}>
      <Navbar handleClick={changeSection} />
      {renderSection()}
      {/**/}
    </div>
  );
}

export default Container;
