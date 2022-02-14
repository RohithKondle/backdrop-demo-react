import React, { useState } from "react";
import AddUser from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {

  const [usersList,setUsersList] = useState([])
  
  const addUserHandler = (uName,age) => {
      setUsersList((previousList) => {
        return [...previousList,
          {name: uName,
            age: age,
            id : Math.random().toString}]
         })
  }

  return <div>
    <AddUser onAddUser = {addUserHandler}/>
    {usersList.length >= 1 ?  <UsersList users={usersList}/> : null}
  </div>;
}

export default App;
