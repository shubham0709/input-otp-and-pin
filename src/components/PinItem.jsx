import React, { forwardRef } from "react";
import styles from "./Pin.module.css";

const PinItem = forwardRef(({ handleOnChange, handleOnBackSpace }, ref) => {
  const handleKeyUp = (e) => {
    console.log("on key up");
    if (e.keyCode === 8) {
      handleOnBackSpace(e);
    } else {
      handleOnChange(e);
    }
  };
  return (
    <div>
      <input
        ref={ref}
        className={styles.inputbox}
        maxLength={1}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
});

export default PinItem;
