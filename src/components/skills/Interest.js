import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
          <span className={classes.head}></span>
          <h2 className={classes.heading}>How a steam locomotive work in modern?</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Operation date</h3>
                <p>The SL Hitoyoshi runs a return journey between Kumamoto and Hitoyoshi once a day on weekends and national holidays from March to November. </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Marking of history</h3>
                <p>The train was inaugurated to celebrate the 100th anniversary of the completion of the Hisatsu Line.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
              <div className={classes.web}>
                <h3>Speed</h3>
                <p>Journey time is 2.5 Hrs in each direction with a 2 hour break at Hitoyoshi. The service is operated by locomotive 58654, which previously operated the 'SL Aso Boy Gō'</p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;