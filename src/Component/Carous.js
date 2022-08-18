import React from 'react'
import {Carousel} from 'react-bootstrap';

const Carous = () => {
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/caros1.jpg')}
            alt="First slide"
            style={{height: "250px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/caros2.jpg')}
            alt="Second slide"
            style={{height: "250px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/caros3.jpg')}
            alt="Third slide"
            style={{height: "250px"}}
          />
        </Carousel.Item>
      </Carousel>
      )
}

export default Carous