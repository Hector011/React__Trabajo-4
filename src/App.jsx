import { useEffect, useState } from "react";
import "./App.css";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import useCrud from "./hooks/useCrud";

function App() {
  const { users, getAllUsers, createNewUser, deleteUserById, updateUserById } =
    useCrud();

  const [updateInfo, setUpdateInfo] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <button>Open Form</button>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        updateUserById={updateUserById}
      />
      <div className="user_container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
