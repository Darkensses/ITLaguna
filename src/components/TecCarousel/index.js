import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './styles.css'

class TecCarousel extends React.Component {
    
    render() {

        return(
            <Carousel className="tec__carousel" showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true} emulateTouch={true} showStatus={false}>
                <div>
                    <img src={require('../../assets/slider/presencial19.jpg')}></img>
                </div>
                <div>
                    <img src={require('../../assets/slider/calendario19.jpg')}></img>
                </div>
                <div>
                    <img src={require('../../assets/slider/img-becas.jpg')}></img>
                </div>
            </Carousel>
        );
    }
}

export default TecCarousel;