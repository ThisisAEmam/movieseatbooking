import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import classes from "./Checkout.module.css";
import { Context } from "../../context/context";
import Navbar from "../../components/Navbar/Navbar";
import MovieImage from "../../components/UI/MovieImage/MovieImage";
import PurchasedModal from '../../components/UI/PurchasedModal/PurchasedModal';

const Checkout = () => {
  const { selectedSeatsNum, checkoutMovie, openPurchasedModal } = useContext(Context);

    if (+selectedSeatsNum === 0) {
      return <Redirect to="/home" />;
    }

    const confirmHandler = () => {
        openPurchasedModal();
    }

  return (
    <React.Fragment>
      <PurchasedModal />
      <Navbar />
      <div className={classes.Checkout}>
        <div className={classes.img}>
          <MovieImage image={checkoutMovie.img} />
        </div>
        <div className={classes.body}>
          <h1 className={classes.header}>{checkoutMovie.name}</h1>
          <p className={classes.seatsNum}>
            No. of seats: <span>{selectedSeatsNum}</span>
          </p>
          <div className={classes.priceConfirm}>
            <p className={classes.totalPrice}>
              Total price: <span>${+selectedSeatsNum * +checkoutMovie.price}</span>
            </p>
            <button onClick={confirmHandler}>Confirm</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Checkout;
