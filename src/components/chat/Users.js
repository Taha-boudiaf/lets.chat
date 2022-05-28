import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import img from "../../assets/svg/user.png";
import { db } from "../../firebase";
import "../chat/css/users.css";

const Users = ({ user, selectUser, user1, chat }) => {
  const user2 = user?.uid;
  const [data, setData] = useState("");

  useEffect(() => {
    const id = user > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), (doc) => {
      setData(doc.data());
    });
    return () => unsub();
  }, [user1, user2]);

  return (
    <>
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
        {data && (
          <p className="truncate">
            <strong>{data.from === user1 ? "Me:" : "Friend:"}</strong>
            {data.text}
            {data?.from !== user1 && data?.unread && (
              <small className="unread">New</small>
            )}
          </p>
        )}
      </div>
    </>
  );
};

export default Users;
