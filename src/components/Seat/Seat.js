import React, { useState, useContext } from "react";
import classes from "./Seat.module.css";
import { Context } from "../../context/context";

const Seat = props => {
  const { selectedSeatsNum, setSelectedSeatsNum} = useContext(Context);
  const [selected, setSelected] = useState(false);

  const clickHandler = () => {
    if (props.occupied) {
      return;
    }
    let counter = selectedSeatsNum;
    if (!selected) {
      setSelected(true);
      counter++;
      setSelectedSeatsNum(counter);
    } else {
      setSelected(false);
      counter--;
      setSelectedSeatsNum(counter);
    }
  };
  return (
    <div
      className={[classes.Seat, props.occupied ? classes.occupied : selected ? classes.selected : props.selected ? classes.selected : null].join(" ")}
      onClick={clickHandler}></div>
  );
};

export default Seat;
