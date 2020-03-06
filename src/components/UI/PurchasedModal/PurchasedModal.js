import React, { useContext } from "react";
import { withRouter } from 'react-router-dom'
import classes from "./PurchasedModal.module.css";
import { Context } from "../../../context/context";
import Backdrop from "../Backdrop/Backdrop";

const PurchasedModal = props => {
  const { showPurchasedModal, closePurchasedModal } = useContext(Context);

    const finishHandler = () => {
        closePurchasedModal();
        props.history.replace('/home');
    }

  return (
    <div className={[classes.PurchasedModal, showPurchasedModal ? classes.show : null].join(' ')}>
      <div className={classes.Modal}>
        <h1 className={classes.header}>Booked Successfully</h1>
        <div className={classes.body}>
          <i className="fas fa-check-circle"></i>
          <p className={classes.disc}>Your booking process is completed successfully.</p>
          <p className={classes.orderNum}>
            Your order number is: <span>{Math.floor(Math.random() * 1000000000000000000)}</span>
          </p>
        </div>
        <button onClick={finishHandler} className={classes.finishBtn}>Finish</button>
      </div>
      <div className={classes.backdrop}>
        <Backdrop />
      </div>
    </div>
  );
};

export default withRouter(PurchasedModal);
