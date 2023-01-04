import { useState } from 'react';
import AddUser from './Component/AddUser/AddUser';
import UserList from './Component/UserList/UserList';


function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {username: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser = {addUserHandler} />
      <UserList users = {usersList}/>
    </div>
  );
}

export default App;
