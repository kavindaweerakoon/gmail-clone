import React from "react";
import "./Login.css";

import { Button } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";


function Login() {
  const provider = new GoogleAuthProvider();
  
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({user}) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png"
          alt=""
        />
        <form>
          <Button variant="container" color="primary" onClick={signIn}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
