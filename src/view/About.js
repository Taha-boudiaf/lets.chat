import React from "react";
import { Container } from "@mui/material";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
const About = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">About</Container>
      <Footer />
    </div>
  );
};

export default About;
