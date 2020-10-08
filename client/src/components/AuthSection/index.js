import React from "react";
import { Card, Container } from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import { AUTH_TYPES } from "../../util/constants";
import AuthForm from "../AuthForm";
import AuthFooter from "../AuthFooter";
import "./styles.scss";

const AuthSection = ({ authType }) => {
  return (
    <section className="auth-section">
      <NavigationBar logoColor="white" />
      <Container>
        <Card className=" shadow auth-section__card">
          <h3> {AUTH_TYPES[authType]?.title} </h3>
          <div>
            <AuthForm authType={authType} authFormData={AUTH_TYPES[authType]} />
            <AuthFooter authType={authType} />
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default AuthSection;
