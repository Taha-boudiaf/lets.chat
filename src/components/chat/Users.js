import React from "react";
import img from "../../assets/svg/user.png";
import "../chat/css/users.css";

const Users = ({ user, selectUser }) => {
  return (
    <div className="user_wrapper" onClick={() => selectUser(user)}>
      <div className="user_info">
        <div className="user_detail">
          <img src={user.avatar || img} className="avatar" alt="avatar" />
          <h4>{user.firstName}</h4>
          <h4>{user.lastName}</h4>
        </div>
        <div
          className={`user_status ${user.isOnline ? "online" : "offline"}`}
        ></div>
      </div>
    </div>
  );
};

export default Users;
