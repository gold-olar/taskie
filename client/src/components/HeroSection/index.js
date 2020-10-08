import React from "react";
import "./styles.scss";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/header-img.png";
import NavigationBar from "../NavigationBar";

const HeroSection = ({ mediaQuery }) => {
  return (
    <>
      <section className="hero-section">
        <NavigationBar logoColor={"white"} />
        <Container>
          <div className="hero-section__text">
            <h1>Taskie brings ease to task management.</h1>
            <Link to="/user/register">
              {" "}
              <Button className="white_btn_outline btn-block  hero-section__cta-btn">
                Try it free
              </Button>
            </Link>
          </div>
          {mediaQuery !== "isMobile" && (
            <img
              className="hero-section__image"
              src={heroImg}
              alt="Dashboard  Mockup"
            />
          )}
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
