import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { db } from "../firebase";
import "./contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [tel, setTel] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    await setDoc(doc(db, "contacts", "contact"), {
      name: name,
      email: email,
      tel: tel,
      message: message,
    })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setTel("");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>
            Contact <span style={{ color: "#5352edcc" }}>Us</span>{" "}
          </h1>
          <p>
            Feel free to contact us if you need any assistance, any help or
            another question.
          </p>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            value={tel}
            placeholder="Mobile Number"
            onChange={(e) => setTel(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input
            type="submit"
            value="Submit"
            style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
