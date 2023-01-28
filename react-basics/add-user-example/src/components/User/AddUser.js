import { useState } from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import ErrorModal from "../common/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState(null);

  const userNameHandler = (e) => setUserName(e.target.value);
  const userAgeHandler = (e) => setUserAge(e.target.value);
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length && userAge.trim().length && +userAge > 0) {
      setError(null);
      props.onUserAdded({
        name: userName,
        age: userAge,
        id: Math.random(),
      });
      setUserName("");
      setUserAge("");
    } else {
      setError((prev) => {
        return {
          title: "Invalid Entries",
          msg: "Please enter correct details",
        };
      });
    }
  };

  const errorHandler = (e) => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.msg}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={userNameHandler}
          ></input>
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            value={userAge}
            onChange={userAgeHandler}
          ></input>
          {/* <button type="submit">Add User</button> */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
