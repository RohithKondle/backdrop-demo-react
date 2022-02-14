import React from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./UsersList.module.css";

const usersList = (props) => {
  return (
    <div>
     
      <Card className={classes.users}>
        <ul>
          {props.users.map((eachUser) => {
            return (
              <li id={eachUser.id}>
                {eachUser.name} ({eachUser.age} years old)
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default usersList;
