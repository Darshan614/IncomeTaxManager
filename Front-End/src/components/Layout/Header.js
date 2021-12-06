import { Fragment } from "react";
import { useContext } from 'react';
import classes from "./Header.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import AuthContext from '../../store/auth-context';

function Header() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
    navigate('/');
  };

  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink style={{ color: 'black', textDecoration: 'inherit'}} to="/">
            <div className={classes.title}>Tax Calculator</div>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <ul class="navbar-nav">
              {!authCtx.isLoggedIn && 
              <li className={classes.item}>
                <NavLink to='/Auth' className={classes.log}>Login</NavLink>
              </li>
              }
              {authCtx.isLoggedIn && (
            <li>
              <button class="btn btn-primary" onClick={logoutHandler}>Logout</button>
            </li>
          )}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
