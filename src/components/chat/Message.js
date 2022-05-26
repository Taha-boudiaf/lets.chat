import React, { useEffect, useRef } from "react";
// import Moment from "react-moment";
import "../../components/chat/css/message.css";
const Message = ({ msg, user1 }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg, user1]);

  return (
    <div
      className={`message_wrapper ${msg.from === user1 ? "own" : ""}`}
      ref={scrollRef}
    >
      <p className={msg.from === user1 ? "me" : "friend"}>
        {msg.media ? <img src={msg.media} alt={msg.text} /> : null}
        {msg.text}
        <br />
        <small>{/* <Moment fromNow>{msg.createdAt.toDate()}</Moment> */}</small>
      </p>
    </div>
  );
};

export default Message;
