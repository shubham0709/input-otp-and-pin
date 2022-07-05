import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Pin.module.css";
import PinItem from "./PinItem";

const Pin = ({ length, setOtp }) => {
  const [inputArrLength] = useState(new Array(length).fill(0));
  const [inputBoxVal, setInputBoxVal] = useState(new Array(length).fill(""));

  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    inputBoxVal[index] = e.target.value;
    setInputBoxVal(inputBoxVal);
    if (index < length - 1 && e.target.value.length > 0) {
      inputRef.current[index + 1].focus();
    }
    setOtp(inputBoxVal.join(""));
  };

  const handleBackSpace = (e, index) => {
    index > 0 && inputRef.current[index - 1].focus();
    inputBoxVal[index] = e.target.value;
    setInputBoxVal(inputBoxVal);
    setOtp(inputBoxVal.join(""));
  };

  const handleOnpaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((item, index) => {
      inputBoxVal[index] = item;
      inputRef.current[index].value = item;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div onPaste={handleOnpaste}>
      <h1>PIN : </h1>
      <div className={styles.inputgrp}>
        {inputArrLength.map((item, index) => (
          <PinItem
            key={index}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
            handleOnChange={(e) => handleChange(e, index)}
            handleOnBackSpace={(e) => handleBackSpace(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

Pin.propTypes = {
  length: PropTypes.number,
  setOtp: PropTypes.func,
};

export default Pin;
