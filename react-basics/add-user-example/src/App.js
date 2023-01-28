import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user)=>{
    setUserList((prev)=> [user, ...prev]);
  }
  return (
    <div>
      <AddUser onUserAdded={addUserHandler}></AddUser>
      { userList.length && <UserList users={userList}></UserList> }
    </div>
  );
}

export default App;
