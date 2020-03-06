import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Booking.module.css";
import SeatIndicators from "../SeatIndicators/SeatIndicators";
import Seats from "../Seats/Seats";
import { Context } from "../../context/context";

const Booking = props => {
  const { selectedSeatsNum, setCheckoutMovie } = useContext(Context);

  const checkoutClickHandler = () => {
    setCheckoutMovie(props.movie);
  }

  return (
    <div className={classes.Booking}>
      <div className={classes.indicators}>
        <SeatIndicators />
      </div>
      <div className={classes.screen}></div>
      <div className={classes.seats}>
        <Seats />
      </div>
      <div className={classes.priceCheckout}>
        <p className={classes.price}>
          You have selected{" "}
          <span className={classes.noOfSeats}>{+selectedSeatsNum === 0 ? "no seats" : +selectedSeatsNum === 1 ? "1 seat" : `${selectedSeatsNum} seats`}</span>{" "}
          for price of <span className={classes.totalPrice}>${+selectedSeatsNum === 0 ? "0" : +selectedSeatsNum * +props.price}</span>
        </p>
        <Link onClick={checkoutClickHandler} to="/checkout" className={[classes.checkoutBtn, selectedSeatsNum === 0 ? classes.disabled : null].join(' ')}>
          Proceed to checkout <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
