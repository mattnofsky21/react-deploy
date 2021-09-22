import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about"> 
                <ScrollAnimation offset="0" animateIn="fadeIn" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}> Rolling stack ride - A historical display</span>
                    <h2 className={classes.heading}>where you can ．hear．smell．feel． the power of the locomotive</h2>
                    <div className={classes.About}>
                        <p>Enjoy the sounds, smoke and vibrations of a powerful steam locomotive along with the untouched beauty of the Kuma River.</p>
                         <p className={classes.br}> Start a journey through the beautiful origin landscapes of Kyushu.</p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;