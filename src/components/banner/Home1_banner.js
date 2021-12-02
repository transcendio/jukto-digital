import React, { Component } from "react";
import {
  MDBAnimation,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBRow,
} from "mdbreact";

import HOME from "../../data/home";

export class CarouselPage extends Component {
  render() {
    const { title, colorTitle, cover, description, buttonRoute } = HOME;
    const TitleSpited = title?.split(colorTitle);
    return (
      <MDBContainer fluid id="home">
        <MDBRow>
          <MDBCarousel
            activeItem={1}
            length={1}
            showControls={false}
            showIndicators={false}
            id="Home_banner"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img className="d-block w-100" src={cover} alt="Transdio" />
                </MDBView>
                <MDBCarouselCaption>
                  <div className="container-xl">
                    <div className="carousel-caption-inner banner1">
                      <MDBAnimation className="slideInUp" count={1} delay="2s">
                        <h2 className="ttm-textcolor-darkgrey flipInY">
                          {TitleSpited[0]}{" "}
                          <strong className="ttm-textcolor-skincolor">
                            {colorTitle}
                          </strong>{" "}
                          {TitleSpited[1]}
                        </h2>
                      </MDBAnimation>
                      <MDBAnimation
                        className="slideInUp"
                        count={1}
                        delay="2.5s"
                      >
                        <p className="text">{description}</p>
                      </MDBAnimation>
                      <MDBAnimation className="slideInUp" count={1} delay="3s">
                        <p>
                          <a href={process.env.PUBLIC_URL + buttonRoute}>
                            <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white">
                              Discuss Your Project
                            </button>
                          </a>

                          {/* &nbsp; &nbsp;
                          <button className="ttm-btn btn-inline ttm-btn-size-md ttm-textcolor-darkgrey ml-3">
                            <i className="ti-arrow-circle-right" />
                            get a Quote
                          </button> */}
                        </p>
                      </MDBAnimation>
                    </div>
                  </div>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              {/* <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1920X850/888888.jpg"
                    alt="First slide"
                  />
                </MDBView>
                <MDBCarouselCaption>
                  <div className="container-xl">
                    <div className="carousel-caption-inner banner1">
                      <MDBAnimation className="slideInUp" count={1} delay="2s">
                        <h2 className="ttm-textcolor-darkgrey flipInY">
                          Best{' '}
                          <strong className="ttm-textcolor-skincolor">
                            Platform
                          </strong>{' '}
                          to Grow Your Bussiness
                        </h2>
                      </MDBAnimation>
                      <MDBAnimation
                        className="slideInUp"
                        count={1}
                        delay="2.5s"
                      >
                        <p className="text">
                          We are equipped with an updated technical knowledge to
                          serve our customers
                          <br /> properly. Our method of application maintains
                          the industry.
                        </p>
                      </MDBAnimation>
                      <MDBAnimation className="slideInUp" count={1} delay="3s">
                        <p>
                          <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white">
                            Discuss Your Project{' '}
                          </button>
                          &nbsp; &nbsp;
                          <button className="ttm-btn btn-inline ttm-btn-size-md ttm-textcolor-darkgrey ml-3">
                            <i className="ti-arrow-circle-right" />
                            get a Quote
                          </button>
                        </p>
                      </MDBAnimation>
                    </div>
                  </div>
                </MDBCarouselCaption>
              </MDBCarouselItem> */}
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default CarouselPage;
