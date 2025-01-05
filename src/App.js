import { useState } from "react";
import UserForm from "./UserForm";
import userList from "./UserList";

function App() {
  const [users, setUsers] = useState("");

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return <UserForm onUserAdd={onUserAdd} />;
}

export default App;
