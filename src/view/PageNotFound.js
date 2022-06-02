import React from "react";
import { Button, Container } from "@mui/material";
import "./notfound.css";

const PageNotFound = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div title="404">
            404<span> Page Not Found</span>
          </div>
          <Button
            style={{
              color: "#2F3542",
              background: "violet",
              padding: "15px 25px",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Go Back
          </Button>
        </div>
      </Container>
    </>
  );
};

export default PageNotFound;
