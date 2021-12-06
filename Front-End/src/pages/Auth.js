import AuthForm from "../components/Auth/AuthForm";
import { useNavigate } from "react-router-dom";
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

function Auth() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const loginhandler = (email, password) => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        if (data.message === "User logged in!") {
          localStorage.setItem('email',email);
            console.log(data);
        authCtx.login(data.accessToken);
          navigate("/Tax");
        }
      });
  };

  const signuphandler = (email, password) => {
    fetch("http://localhost:8080/signup", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        console.log('data signup ',data);
        if (data.message === "User signed up") {
          navigate("/");
        }
      });
  };

  return <AuthForm loginhandler={loginhandler} signuphandler={signuphandler}></AuthForm>;
}

export default Auth;
