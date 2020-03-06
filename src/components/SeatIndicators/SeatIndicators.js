import React from 'react';
import classes from './SeatIndicators.module.css';
import Seat from '../Seat/Seat';

const SeatIndicators = () => {
    return (
        <div className={classes.SeatIndicators}>
            <div className={classes.seatGroup}>
                <Seat />
                <p>Not Occupied</p>
            </div>
            <div className={classes.seatGroup}>
                <Seat occupied />
                <p>Occupied</p>
            </div>
            <div className={classes.seatGroup}>
                <Seat selected />
                <p>Selected</p>
            </div>
        </div>
    )
}

export default SeatIndicators
