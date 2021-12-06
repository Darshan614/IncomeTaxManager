import classes from "./Taxform.module.css";
import { useState, Fragment, useRef } from "react";
import ConfirmationModal from "./ConfirmationModal";

function TaxForm(props) {
  const [showconfirmationmodal, setshowconfirmationmodal] = useState(false);
  //form1
  const [bas, setbas] = useState(0);
  const [lta, setlta] = useState(0);
  const [hra, sethra] = useState(0);
  const [fa, setfa] = useState(0);
  //form2
  const [inv, setinv] = useState(0);
  const [rent, setrent] = useState(0);
  const [citymetro, setcitymetro] = useState();
  const [med, setmed] = useState(0);
  const [selectcity, setselectcity] = useState(false);
  //formtoggle
  const [form1, setform1] = useState(true);
  const [enabled, setenabled] = useState(false);

  //firstform
  const basicsalaryhandler = event => {
    setbas(event.target.value);
  };
  const ltahandler = event => {
    setlta(event.target.value);
  };
  const hrahandler = event => {
    sethra(event.target.value);
  };
  const fahandler = event => {
    setfa(event.target.value);
  };

  const nextform = event => {
    console.log(bas, lta, hra, fa);
    event.preventDefault();
    setform1(false);
  };

  const backform = event => {
    event.preventDefault();
    setform1(true);
  };
  //form2
  const invhandler = event => {
    setinv(event.target.value);
  };
  const renthandler = event => {
    setrent(event.target.value);
  };
  const metrocityhandler = event => {
    setselectcity(false);
    setenabled(true);
    setcitymetro("Metro");
  };
  const nonmetrocityhandler = event => {
    setenabled(true);
    setselectcity(false);
    setcitymetro("Non-Metro");
  };
  const medhandler = event => {
    setmed(event.target.value);
  };

  const submithandler = event => {
    event.preventDefault();
    if (citymetro === undefined) {
      setselectcity(true);
      console.log(selectcity);
    } else {
      setselectcity(false);
      setshowconfirmationmodal(true);
    }
  };

  return (
    <Fragment>
      {form1 && (
        <form className={classes.form}>
          <div class="container">
            <div className={classes.entry}>
              <div class="d-grid text-start">
                <label>Basic</label>
                <input
                  value={bas}
                  type="number"
                  name="basic"
                  onChange={basicsalaryhandler}
                  required
                ></input>
              </div>
            </div>
            <div className={classes.entry}>
              <div class="d-grid text-start">
                <label>Leave Travel Allowance (LTA)</label>
                <input
                  value={lta}
                  type="number"
                  name="basic"
                  onChange={ltahandler}
                  required
                ></input>
              </div>
            </div>

            <div className={classes.entry}>
              <div class="d-grid text-start">
                <label>HRA</label>
                <input
                  value={hra}
                  type="number"
                  name="basic"
                  onChange={hrahandler}
                  required
                ></input>
              </div>
            </div>
            <div className={classes.entry}>
              <div class="d-grid text-start">
                <label>Food Allowance(FA)</label>
                <input
                  value={fa}
                  type="number"
                  name="basic"
                  onChange={fahandler}
                  required
                ></input>
              </div>
            </div>
            <p className={classes.entry}>. . . . . . . . . . . . . </p>
            <div className={classes.entrybutt}>
              <div class="d-flex text-start">
                <button class="btn btn-warning" onClick={nextform}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {!form1 && (
        <form className={classes.form}>
          <div class="container">
            <div className={classes.entry}>
              <div class="d-grid text-start">
                <label>Investments under section 80C</label>
                <input
                  value={inv}
                  type="number"
                  onChange={invhandler}
                  name="basic"
                  required
                ></input>
              </div>
            </div>
            <div className={classes.entry}>
              <div class="d-grid text-start">
                <label>Rent paid</label>
                <input
                  value={rent}
                  type="number"
                  onChange={renthandler}
                  name="basic"
                  required
                ></input>
              </div>
            </div>

            <div className={classes.entry}>
              <div class="d-grid text-start">
                <div className={selectcity && classes.error}>
                  <label>City Type: </label>
                </div>
                <div className={classes.check}>
                  <div class="d-flex">
                    <input
                      value={citymetro}
                      id="metro"
                      type="radio"
                      onChange={metrocityhandler}
                      name="basic"
                      required
                    ></input>
                    <label for="metro">Metropolitan </label>
                  </div>

                  <div class="d-flex">
                    <input
                      id="nonmetro"
                      type="radio"
                      onChange={nonmetrocityhandler}
                      name="basic"
                      required
                    ></input>
                    <label for="nonmetro">Non-Metropolitan </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.entry}>
              <div class="d-grid text-start">
                <label>Mediclaim policy premium</label>
                <input
                  value={med}
                  type="number"
                  onChange={medhandler}
                  name="basic"
                  required
                ></input>
              </div>
            </div>
            <p className={classes.entry}>. . . . . . . . . . . . . </p>
            <div className={classes.entrybutt}>
              <div>
                <button class="btn btn-warning" onClick={backform}>
                  Back
                </button>
              </div>
              <div>
                {enabled && (
                  <ConfirmationModal
                    bas={bas}
                    lta={lta}
                    hra={hra}
                    fa={fa}
                    inv={inv}
                    rent={rent}
                    citymetro={citymetro}
                    med={med}
                    gettaxableincome={props.gettaxableincome}
                  ></ConfirmationModal>
                )}
              </div>
            </div>
          </div>
        </form>
      )}
    </Fragment>
  );
}

export default TaxForm;
