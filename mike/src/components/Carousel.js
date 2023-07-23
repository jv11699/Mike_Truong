import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import ScrollDown  from "./ScrollDown.js";


import "../css/Carousal.css";

import  Slide1  from "../images/westhartford.jpg";
import  Slide2  from "../images/westhartford2.jpg";
import  Slide3  from "../images/westhartford3.jpg";




const CustomCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <img className="d-block custom-img" src={Slide1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block custom-img"
                        src={Slide2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block custom-img"
                        src={Slide3}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}

export default CustomCarousel