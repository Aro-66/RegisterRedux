import React from "react";
import { useSelector } from "react-redux";
import { usersInfo } from "../../store/slices/usersSlice/usersSlice";

const UsersPage = () => {
  const { users } = useSelector(usersInfo);

  return (
    <div className="profiles">
      {users?.map((el) => {
        return (
          <div key={el.id} className="users">
            <h1>{el.fname}</h1>
            <p>{el.email}</p>
            <p>{el.price}$</p>
            <img src={el.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default UsersPage;
