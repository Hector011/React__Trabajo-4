import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({
  createNewUser,
  updateInfo,
  setUpdateInfo,
  updateUserById,
}) => {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUserById(updateInfo.id, data);
      setUpdateInfo();
    } else {
      createNewUser(data);
    }

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>{updateInfo ? "Update User" : "Create User"}</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <div>
        <label htmlFor="first_name">First name</label>
        <input type="text" id="first_name" {...register("first_name")} />
      </div>
      <div>
        <label htmlFor="last_name">Last name</label>
        <input type="text" id="last_name" {...register("last_name")} />
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input type="date" id="birthday" {...register("birthday")} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormUser;
