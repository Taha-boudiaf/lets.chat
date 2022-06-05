import React from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <form>
          <h1>
            Contact <span style={{ color: "#5352edcc" }}>Us</span>{" "}
          </h1>
          <p>
            Feel free to contact us if you need any assistance, any help or
            another question.
          </p>
          <input type="text" placeholder="Name" required autoFocus />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Mobile Number" />
          <textarea placeholder="Message" required></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
