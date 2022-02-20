import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [age, setAge] = useState("");
  const [error,setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || age <= 0) {
      setError({
          title  : 'Invalid Input',
          message : 'Please enter a valid input.'
      });
      return;
    };

    if(+age < 1) {
      setError({
        title  : 'Invalid age',
        message : 'Please enter a valid age (>0).'
      });
      return;
    }
    

    props.onAddUser(enteredUserName, age);

    setEnteredUserName("");
    setAge("");
  };

  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const onErrorClose = () => {
    setError();
  }

  return (
    <div>
       {error && <ErrorModal message={error.message} title={error.title} errorClosed = {onErrorClose} />} 

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">User Name : </label>
          <input
            id="userName"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />

          <label htmlFor="age">Age : </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangedHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;