import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    hasError: inValidName,
    valueIsValid: nameIsValid,
    valueInpHandler: nameInpHandler,
    valueBlurHandler: inputBlurHandler,
    reset: resetName,
  } = useInput((inp) => inp.trim() !== "");

  const {
    value: email,
    hasError: inValidEmail,
    valueIsValid: emailIsValid,
    valueInpHandler: emailInpHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((inp) => inp.includes("@"));

  let formIsValid = nameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    console.log(name);
    resetName();
    resetEmail();
  };

  const formInpCss = inValidName ? "form-control invalid" : "form-control";
  const formEmailCss = inValidEmail ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formInpCss}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onBlur={inputBlurHandler}
          onChange={nameInpHandler}
        />
      </div>
      {inValidName && <p className="error-text">Name is required.</p>}
      <div className={formEmailCss}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="name"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailInpHandler}
        />
      </div>
      {inValidEmail && <p className="error-text">Enter valid email please.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
