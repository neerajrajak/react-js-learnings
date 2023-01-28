import { useReducer } from "react";

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return inputStateReducer;
};

const useInput = (validateFn) => {
  // const [value, setValue] = useState("");
  // const [valueIsTouched, setValueIsTouched] = useState(false);
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateFn(inputState.value);

  const hasError = inputState.isTouched && !valueIsValid

  const valueInpHandler = e => dispatch({ type: 'INPUT', value: e.target.value });

  const valueBlurHandler = () => dispatch({ type: 'BLUR' });;

  const reset = ()=> dispatch({ type: 'RESET' });

  return {
    value: inputState.value,
    hasError,
    valueIsValid,
    valueInpHandler,
    valueBlurHandler,
    reset
  }
};

export default useInput;
