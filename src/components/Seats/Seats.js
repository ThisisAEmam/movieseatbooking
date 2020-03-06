import React, {useContext} from "react";
import classes from "./Seats.module.css";
import Seat from "../Seat/Seat";
import { Context } from '../../context/context'

const Seats = () => {
    const {occupiedSeats} = useContext(Context);
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr[i] = i;
  }

  let seatsArr = arr.map((seat, index) => {
      for(let num of occupiedSeats) {
          if (index === num) {
              return <Seat Id={index} key={index} occupied />
          } 
      }
    return <Seat Id={index} key={index} />;
  });

  return <div className={classes.Seats}>{seatsArr}</div>;
};

export default Seats;
