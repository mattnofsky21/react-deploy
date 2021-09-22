import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css"; 
import Scene from '../images/scene1.jpg'
import Scene2 from '../images/scene2.jpg'
import Old1 from '../images/old1.jpg'

 class CarouselImages extends Component {
    render(){
    return (
        <div className={classes.carousel_container} id="start">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
            <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay  showStatus={false} showThumbs={false} >    
                <div className={classes.image_container}>
                    <img className={classes.image} src={Scene} alt="myImage"/>
                </div>
                <div className={classes.image_container}>
                    <img className={classes.image} src={Scene2} alt="myImage"/>
                </div>
                <div className={classes.image_container}>
                    <img className={classes.image} src={Old1} alt="myImage"/>
                </div>
            </Carousel>
          {/* </ScrollAnimation> */}
          {/* <div  className={classes.h2}*/}
        </div>
     )
    }
}
export default CarouselImages