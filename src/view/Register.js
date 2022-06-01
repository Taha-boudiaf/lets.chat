import React, { useState } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { Validation } from "../components/FormUI/Yup/Yup";
import Textfield from "../components/FormUI/Textfield/index";
import Button from "../components/FormUI/Submit/index";
import { useAuth } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import DateTimePicker from "../components/FormUI/DataTimePicker/index";
import Select from "../components/FormUI/Select/index";
import countries from "../data/data.json";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../components/css/register.css";
const FORM_VALIDATION = Validation;

const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    birthDay: "",
    country: "",
  });

  const Navigate = useNavigate();

  const { Register } = useAuth();

  const handleSubmit = async (data) => {
    setData({ ...data });
    const res = await Register(data.email, data.password);
    await setDoc(doc(db, "users", res.user.uid), {
      ...data,
      uid: res.user.uid,
      createdAt: Timestamp.fromDate(new Date()),
      isOnline: true,
      admin: false,
    });
    Navigate("/chat");
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
          <Paper style={{ padding: "2rem" }}>
            <div>
              <Typography
                variant="h3"
                style={{ fontWeight: "600", fontSize: "2rem" }}
              >
                Create Account.
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  marginBottom: "35px",
                  lineHeight: "2.75",
                  color: "#757982",
                }}
              >
                Share your thoughts with the world from today
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
                    <Grid item xs={6}>
                      <Textfield
                        style={{ borderRadius: "5px", marginTop: "12px" }}
                        name="firstName"
                        label="FirstName"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Textfield
                        style={{ borderRadius: "5px", marginTop: "12px" }}
                        name="lastName"
                        label="LastName"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        style={{ borderRadius: "5px", marginTop: "12px" }}
                        name="email"
                        label="Email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        style={{ borderRadius: "5px", marginTop: "12px" }}
                        name="password"
                        label="Password"
                        type="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Textfield
                        style={{ borderRadius: "5px", marginTop: "12px" }}
                        name="phoneNumber"
                        label="number"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Select
                        name="country"
                        label="Country"
                        options={countries}
                        style={{ borderRadius: "5px", marginTop: "12px" }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <DateTimePicker
                        style={{ borderRadius: "5px", marginTop: "12px" }}
                        name="birthDay"
                        label="birthDay"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        className="btn"
                        style={{
                          background: "#7373f0",
                          padding: " 0.895rem",
                          fontSize: "1rem",
                          fontWeight: "600",
                          borderRadius: "5px",
                          ":hover": {
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
                          marginBottom: "5px",
                          marginTop: "10px",
                          lineHeight: "2.75",
                          color: "#757982",
                        }}
                      >
                        You have an account? <a href="/login">Connect Now</a>
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

export default Register;
