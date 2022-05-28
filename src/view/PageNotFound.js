import React from "react";
import { Container } from "@mui/material";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const PageNotFound = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">404 Page Not Found</Container>

      <Footer />
    </div>
  );
};

export default PageNotFound;
