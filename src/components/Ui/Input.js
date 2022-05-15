import styles from "./input.module.css";

function Input({
  placeholder,
  value,
  onTextChange,
  type = "text",
  inputRef,
  customStyle = {},
  onInputFocus,
  id = "",
}) {
  return (
    <input
      style={customStyle}
      ref={inputRef}
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onTextChange}
      type={type}
      onFocus={onInputFocus}
      id={id}
    />
  );
}

export default Input;
