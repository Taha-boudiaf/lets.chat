import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import LandingPage from "../assets/lanPge.png";
import Contacts from "../assets/contacts.png";
import Notifications from "../assets/notification.png";
import ChatWithUs from "../assets/chatWithUs.png";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div style={{ background: "#e0e0fc" }}>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography class={styles.heading}>
              Your Friends Come To You.
            </Typography>
            <Typography class={styles.sub__heading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitationv Come To You
            </Typography>
            <a href="/chat">
              <Button class={styles.btn}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24.5" cy="24.5" r="24.5" fill="white" />
                  <path
                    d="M25 16V34"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 25H34"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Conect Now</span>
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} md={6} className={styles.landing__page}>
            <img src={LandingPage} alt={styles.landing__page} />
          </Grid>
          <Grid
            className="RowBottom"
            item
            xs={12}
            display="flex"
            justifyContent="space-around"
          >
            <div>
              <Typography class={styles.bottom}>Participants</Typography>
              <img
                src={Contacts}
                alt="landing__page"
                className={styles.participants}
              />
            </div>
            <div>
              <Typography class={styles.bottom}>Notifications</Typography>
              <img
                src={Notifications}
                alt="landing__page"
                class={styles.Notifications}
              />
            </div>
            <div>
              <Typography class={styles.bottom3}>Chat With Us</Typography>
              <img
                src={ChatWithUs}
                alt="landing__page"
                class={styles.ChatWithUs}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
