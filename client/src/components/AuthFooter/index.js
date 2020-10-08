import React from "react";
import { Link } from "./../../util/router.js";
import "./styles.scss";

function AuthFooter({ authType }) {
  return (
    <div className="AuthFooter text-center mt-4">
      {authType === "register" && (
        <>
          Have an account already?
          <Link to="/user/login">Login</Link>
        </>
      )}

      {authType === "forgot-password" && (
        <>
          <Link to="/user/register"> Get an account</Link>
          <Link to="/user/login">Login </Link>
        </>
      )}

      {authType === "login" && (
        <>
          <Link to="/user/register"> Get an account</Link>
          <Link to="/user/forgot-password">Forgot Password ? </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
