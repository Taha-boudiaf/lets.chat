import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { Validation } from "../components/FormUI/Yup/loginYup";
import { useAuth } from "../context/ChatContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../components/css/register.css";
import TextField from "../components/FormUI/Textfield/index";
import Button from "../components/FormUI/Submit/index";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FORM_VALIDATION = Validation;

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { Login } = useAuth();
  const Navigate = useNavigate();

  const handleSubmit = async (data) => {
    setData({ ...data });

    const res = await Login(data.email, data.password);
    await updateDoc(doc(db, "users", res.user.uid), {
      isOnline: true,
    });

    Navigate("/chat", { replace: true });
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "36rem",
            marginTop: "100px",
            marginBottom: "145px",
          }}
        >
          <Paper style={{ padding: "2rem", marginBottom: "15px" }}>
            <div>
              <Typography
                variant="h3"
                style={{ fontWeight: "600", fontSize: "2rem" }}
              >
                Welcome Back!
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  marginBottom: "15px",
                  lineHeight: "2.75",
                  color: "#757982",
                }}
              >
                Sign in to your account
              </Typography>
            </div>
            <Grid item xs={12}>
              <Formik
                initialValues={{ ...data }}
                validationSchema={FORM_VALIDATION}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        style={{ marginTop: "24px", borderRadius: "5px" }}
                        name="email"
                        label="Email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        style={{ borderRadius: "5px", marginTop: "24px" }}
                        name="password"
                        label="Password"
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        style={{
                          background: "#7373f0",
                          padding: " 0.895rem",
                          fontSize: "1rem",
                          fontWeight: "600",
                          borderRadius: "5px",
                          "&:hover": {
                            background: "#2F3542",
                          },
                        }}
                      >
                        Conect Now
                      </Button>
                    </Grid>
                    <div>
                      <Typography
                        variant="subtitle1"
                        style={{
                          marginLeft: "20px",
                          marginBottom: "10px",
                          lineHeight: "2.75",
                          color: "#757982",
                        }}
                      >
                        You Dont have Account? <a href="/register">Join Now</a>
                      </Typography>
                    </div>
                  </Grid>
                </Form>
              </Formik>
            </Grid>
          </Paper>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
