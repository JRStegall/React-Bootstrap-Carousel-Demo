import React, { Component } from "react";
import { Carousel } from "bootstrap";


export class BootstrapCarouselDemo extends Component {
    render() {
        return (
            <div>
            <div class="container-fluid">
                <div className="row-title" style={{ 'margin-bottme': "20px" }}>
                    <div class="col-sm-12 btn btn-warning">
                        How To Use Bootstrap Carousel in Reactjs
                    </div>
                </div>
            </div>
            <div className="container-fluid carousel">
                <Carousel interval={600} keyBoard={false} pauseOnHover={true} style={{ 'width': '500px'}}>
                    <Carousel.Item style={{ "height": "300px" }}>
                        <img style={{ "height": "300px" }} className="d-block w-100"  src={"assets/img/moms1.jpeg"} alt="MOMS 10/2"></img>
                    <Carousel.Caption>
                        <h3>First Demo</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': '300px' }}>
                        <img style={{ 'height': '300px' }} className="d-block w-100" src={"assets/img/moms2.jpeg"} alt="MOMS 10/2"></img>
                        <Carousel.Caption>
                            <h3>Second Demo</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ 'height': '300px' }}>
                        <img style={{ 'height': '300px' }} className="d-block w-100" src={"assets/img/moms3.jpeg"} alt="MOMS 10/2"></img>
                        <Carousel.Caption>
                            <h3>Third Demo</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        )
    }
}
