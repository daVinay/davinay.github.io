import React, {Component} from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css"; 
import {GoProject} from 'react-icons/go'
import {FaArrowCircleDown} from 'react-icons/fa'
import Hello from '../images/Hello.jpg'
import BIsland from '../images/BIsland.jpg'

 class CarouselImages extends Component {
     render(){
    return (
        <div className={classes.carousel_container} id="start">
            <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay  showStatus={false} showThumbs={false} >
                <div  className={classes.image_container} >
                    <img className={classes.image} src={Hello}  alt="myImage"/>
                    <div  className={classes.h1}>
                       <h1 >I'm Vinay</h1>
                       <a href="https://drive.google.com/file/d/1l5YbuoCmk24vvZdRllf1AM5oI9inYNCS/view?usp=sharing" rel="noopener noreferrer" target="_blank">VIEW CV   <FaArrowCircleDown/></a>
                    </div>
                </div>
                <div className={classes.image_container}>
                    <img className={classes.image} src={BIsland} alt="myImage"/>
                    <div style={{color:'white'}} className={classes.h2}> 
                    <h1> I love building</h1>
                    <h1>THINGS!!</h1>
                    <a href="https://github.com/daVinay" rel="noopener noreferrer" target="_blank">VIEW PROJECTS   <GoProject/></a>
                    </div>
                </div>
            </Carousel>
        </div>
     )
    }
}
export default CarouselImages