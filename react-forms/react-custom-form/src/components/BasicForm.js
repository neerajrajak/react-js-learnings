import useFormInput from "../hooks/use-form-input";

const BasicForm = (props) => {
  const notEmpty = (inp) => inp.trim() !== "";
  const {
    inputVal: firstName,
    isInputValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputValHandler: firstNameChangeHandler,
    inputTouchHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useFormInput(notEmpty);

  let formIsValid = firstNameIsValid;

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!firstNameIsValid) {
      return;
    }
    resetFirstName();
  };

  const firstNameCss = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstNameCss}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      {firstNameHasError && (
        <p className="error-text">First Name is required.</p>
      )}
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
