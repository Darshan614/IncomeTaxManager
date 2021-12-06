import { Fragment, useState, useEffect } from "react";
import classes from "./ConfirmationModal.module.css";


function ConfirmationModal(props) {
  
  const [applicableHRA, setapplicableHRA] = useState(0);
  useEffect(() => {
    let value2 = (props.rent - 0.1 * props.bas)>0 ? (props.rent - 0.1 * props.bas) : 0;
    if (props.citymetro === "Metro") {
      setapplicableHRA(
        Math.min(
          props.hra,
          Math.min(0.5 * props.bas, value2)
        )
      );
    } else {
      setapplicableHRA(
        Math.min(
          props.hra,
          Math.min(0.4 * props.bas, value2)
        )
      );
    }
  }, [props]);

  const onconfirm = (event) => {
    event.preventDefault();
    props.gettaxableincome(props.bas,props.lta,props.hra,props.fa,props.inv,props.rent,props.citymetro,props.med,applicableHRA);
  }

  return (
    <Fragment>
      <div>
        <button
          type="button"
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit
        </button>
      </div>

      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div className={classes.title}>
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Confirm Details
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="modal-body">
              <div className={classes.basic}>
                <span>Basic Salary :</span>{" "}
                <span className={classes.amount}>{props.bas}</span>
                <hr></hr>
              </div>
              <div className={classes.basic}>
                <span>LTA :</span>{" "}
                <span className={classes.amount}>{props.lta}</span>
                <hr></hr>
              </div>
              <div className={classes.basic}>
                HRA : <span className={classes.amount}>{props.hra}</span>
                <hr></hr>
              </div>
              <div className={classes.basic}>
                FA : <span className={classes.amount}>{props.fa}</span>
                <hr></hr>
              </div>
              <div className={classes.basic}>
                Invested : <span className={classes.amount}>{props.inv}</span>
                <hr></hr>
              </div>
              <div className={classes.basic}>
                Rent : <span className={classes.amount}>{props.rent}</span>
                <hr></hr>
              </div>
              <div className={classes.basic}>
                City Type :{" "}
                <span className={classes.amount}>{props.citymetro}</span>
                <hr></hr>
              </div>
              <div className={classes.basic}>
                Mediclaim Policy Premium :{" "}
                <span className={classes.amount}>{props.med}</span>
                <hr></hr>
              </div>
              <div className={classes.basic}>
                Applicable HRA :{" "}
                <span className={classes.amount}>{applicableHRA}</span>
                <hr></hr>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onClick={onconfirm}
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default ConfirmationModal;
