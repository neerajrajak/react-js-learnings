import { useState } from "react";

const useFormInput = (validateFn) => {
  const [inputVal, setInputVal] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const isInputValid = validateFn(inputVal);

  const hasError = inputIsTouched && !isInputValid;

  const inputValHandler = (e) => setInputVal(e.target.value);

  const inputTouchHandler = () => setInputIsTouched(true);

  const reset = () => {
    setInputIsTouched(false);
    setInputVal("");
  };

  return {
    inputVal,
    isInputValid,
    hasError,
    inputValHandler,
    inputTouchHandler,
    reset
  };
};

export default useFormInput;