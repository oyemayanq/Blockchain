import { useRef, useState, useEffect } from "react";

import styles from "./currency-converter.module.css";
import Input from "../Ui/Input";

function CurrencyConverter() {
  const priceInputRef = useRef();
  const [currency, setCurrency] = useState("INR");
  const [value, setValue] = useState(0);
  const [currencyList, setCurrecyList] = useState([]);
  const [menuState, setMenuState] = useState(false);

  const getCurrencyList = async () => {
    try {
      const response = await fetch("https://blockchain.info/ticker");
      const result = await response.json();
      console.log(result);
      let tempList = [];
      for (const key in result) {
        tempList.push(key);
      }
      setCurrecyList(tempList);
    } catch (err) {
      console.log(err);
    }
  };

  const getConvertedValue = async () => {
    try {
      const value = priceInputRef.current.value || 1;
      const response = await fetch(
        `https://blockchain.info/tobtc?currency=${currency}&value=${value}`
      );
      const result = await response.json();

      setValue(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrencyList();
    getConvertedValue();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(priceInputRef.current.value, currency);
    getConvertedValue();
    //getCurrencyList();
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        if (e.target.id === "currency-input") return;
        if (menuState) {
          setMenuState(false);
        }
      }}
      className={styles.converter}
    >
      <h1 className={styles["converter__header"]}>
        Currency to Bitcoin Converter
      </h1>
      <form onSubmit={handleSubmit} className={styles["converter__form"]}>
        <Input placeholder={1} inputRef={priceInputRef} />
        <div className={styles["currency-input"]}>
          <Input
            customStyle={{ flex: 1 }}
            placeholder="USD"
            value={currency}
            onTextChange={(e) => {
              setCurrency(e.target.value);
            }}
            onInputFocus={() => setMenuState(true)}
            id="currency-input"
          />
          <div
            data-type="menu-toggler"
            onClick={() => {
              setMenuState((state) => !state);
            }}
            className={styles["menu-toggler"]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles["toggler-btn"]}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {menuState && (
            <div
              className={`${styles["currency-menu"]} ${
                menuState ? styles["active-menu"] : ""
              }`}
            >
              {currencyList.length !== 0 &&
                currencyList.map((c) => (
                  <div
                    key={c}
                    onClick={() => {
                      setCurrency(c);
                      setMenuState(false);
                    }}
                    className={styles["menu__item"]}
                  >
                    <p>{c}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div onClick={handleSubmit} className={styles["submit-button"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.submit}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </form>
      <div className={styles["converter__result"]}>
        {value && <p>{value} BTC</p>}
      </div>
    </div>
  );
}

export default CurrencyConverter;
