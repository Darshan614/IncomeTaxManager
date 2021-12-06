import { useState, Fragment } from "react";
import classes from "./AuthForm.module.css";

function AuthForm(props) {
  const [login, setlogin] = useState(true);

  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [passwordunmatch,setpasswordunmatch] = useState(false);

  const emailchangehandler = (event) => {
    setemail(event.target.value);
  }
  const passwordchangehandler = (event) => {
    setpassword(event.target.value);
  }
  const confirmpasswordchangehandler = (event) => {
    setconfirmpassword(event.target.value);
  }
  const loginhandler = (event) => {
    event.preventDefault();
    props.loginhandler(email,password);
  }
  const signuphandler = (event) => {
    event.preventDefault();
    if(password!==confirmpassword)
    {
      setpasswordunmatch(true);
    }
    else
    {
      props.signuphandler(email,password);
    }
    
  }

  const toggleform = event => {
    event.preventDefault();
    setlogin(login => {
      return !login;
    });
  };
  return (
    <Fragment>
      <div class="container">
        <form className={classes.form}>
          <h3>{login ? "Login" : "SignUp"}</h3>
          <div class="container">
          <div className={classes.entry}>
            <div class="row">
              <div class="col-md">
                <label className={classes.label}>Email</label>
              </div>
              <div class="col-md">
                <input
                onChange={emailchangehandler}
                  className={classes.input}
                  type="email"
                  name="basic"
                ></input>
              </div>
            </div>
          </div>
          <div className={classes.entry}>
            <div class="row">
              <div class="col-md">
                <label className={classes.label}>Password</label>
              </div>
              <div class="col-md">
                <input
                onChange={passwordchangehandler}
                  className={classes.input}
                  type="password"
                  name="basic"
                ></input>
              </div>
            </div>
          </div>
          { !login && 
          <div className={classes.entry}>
            <div class="row">
              <div class="col-md">
                <label className={classes.label}>Confirm Password{passwordunmatch && "( Passwords did not match )"}</label>
              </div>
              <div class="col-md">
                <input
                onChange={confirmpasswordchangehandler}
                  className={classes.input}
                  type="password"
                  name="basic"
                ></input>
              </div>
            </div>
          </div>
          }
          <div className={classes.butt}>
            <button onClick={login ? loginhandler: signuphandler} class="btn btn-success" type="submit">
              {login ? "Login" : "SignUp"}
            </button>
          </div>
          <div className={classes.change}>
            {login ? "New user? " : "Already a user? "}
            <button class="btn btn-warning" onClick={toggleform}>
              {login ? "SignUp" : "Login"}
            </button>
          </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default AuthForm;
