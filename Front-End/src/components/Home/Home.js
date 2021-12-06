import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

function Home() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const toTax = event => {
    event.preventDefault();
    {authCtx.isLoggedIn ? navigate("/Tax") : navigate('/Auth')}
  };

  return (
    <div>
      <div className={classes.head}>
        <h1>Get your Taxable income hassle free... </h1>
      </div>
      <div className={classes.head2}>
        <h1>In three simple steps</h1>
      </div>
      <div className={classes.head3}>
        <h1>
          <span className={classes.step1}>Enter Details</span> ,{" "}
          <span className={classes.step2}>Click Submit</span> ,{" "}
          <span className={classes.step3}>Click Confirm</span>
        </h1>
      </div>
      <button className={classes.butt} onClick={toTax}>
        Get Started
      </button>
    </div>
  );
}

export default Home;
