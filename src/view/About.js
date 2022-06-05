import React from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "./about.global.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class=" about-content animated fadeIn scrollable">
            <h1 class="animated fadeIn one">about</h1>
            <div
              class="about-me"
              style={{
                transform: "translateY(0px) translateZ(0px)",
                marginTop: "20px",
              }}
            >
              <div class="animated fadeIn two">
                <p>
                  It’s where your world hangs out. Let's chat is a text
                  communication service used to hang out and talk with their
                  friends. Let's chat is about giving people the power to create
                  space to find belonging in their lives. We want to make it
                  easier for you to talk regularly with the people you care
                  about. We want you to build genuine relationships with your
                  friends and communities close to home or around the world.
                  Original, reliable, playful, and relatable.
                </p>
              </div>
              <div
                class="Synopsis-highlightLine five"
                style={{ transform: " matrix(1, 0, 0, 1, 0, 0)" }}
              ></div>
              <div class="animated fadeIn three">
                <p class="Synopsis-highlight">
                  Our product supports sending and receiving a variety of media:
                  text and photos.
                </p>
              </div>
              <div
                class="Synopsis-highlightLine five"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
              ></div>
            </div>
          </div>
          <div class="about-panel-wrapper">
            <div class=" about-panel animated fadeIn">
              <div class="perspective-container">
                <div
                  class="zero photo-about animated fadeIn"
                  style={{ transform: "translateY(0px) translateZ(0px)" }}
                >
                  <div class="hide-photo-filter animated fadeIn"></div>
                  <div class="about-info">
                    <h3 class="about-info-name animated fadeInUp up-one">
                      CREATE SPACE FOR EVERYONE TO FIND BELONGING
                    </h3>
                    <div class="about-info-contact">
                      <h4 class="animated fadeInUp up-two">
                        {" "}
                        Free and secure calls and messages to anyone, anywhere
                      </h4>
                      <p class="animated fadeInUp up-three">
                        Keep your conversations going no matter where you are.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
