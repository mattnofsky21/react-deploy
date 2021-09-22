import React, { Component } from 'react';
import classes from './History.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
//import "animate.css/animate.min.css";
import { GiJapan } from 'react-icons/gi';
import { GiCoalWagon } from 'react-icons/gi';
import { WiTrain } from 'react-icons/wi';


class History extends Component {

        render() {
            return (<div className={classes.box} id="history">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                     <span  className={classes.head}>HISORY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <GiJapan />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2>New Class of 8620 <span>1914 ¬ 1929</span></h2>
                                                <p>As a new type of 2-6-0 steam locomotive built in Japan, a total of 672 Class 8620 locomotives were built</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                       <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.9' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                <GiCoalWagon />
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >National Railway on Hisatsu Line <span>1930 ¬ 1980</span></h2>
                                                <p>Serviced as passenger cars along with KiHa 40 series DMU, KiHa 200 series DMU and  JNR 50 series</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='3.4' animateOnce="true" initiallyVisible ={true}>
                                            <article>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`} >
                                                    <WiTrain />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >SL Hitoyoshi <span>2005 ¬ Now</span></h2> 
                                                <p>Preserved in working order as an excursion train at Kumamoto Depot in Kumamoto city centre.</p>
                                                </div>
                                                <div className={classes.timeline_entry_inner}><div  className={classes.timeline_icon_3||classes.color_none}></div></div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </ScrollAnimation>
                </div>
        )}
}

export default History;
