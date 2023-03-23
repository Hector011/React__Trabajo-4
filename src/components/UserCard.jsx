import React from "react";

const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
  };

  return (
    <article>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <ul>
        <li>
          <span>Correo</span>
          {user.email}
        </li>
        <li>
          <span>Cumpleaños</span>
          {user.birthday}
        </li>
      </ul>
      <footer>
        <button onClick={() => deleteUserById(user.id)}>
          <i className="bx bx-trash"></i>
        </button>
        <button onClick={() => handleEdit()}>
          <i className="bx bx-edit"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
