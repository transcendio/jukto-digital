import React, { Component } from "react";
import CONTACT from "../../data/contact";
import SITE from "../../data/site";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer widget-footer clearfix" id="contact">
        {this.props.children}
        {/* <div className="first-footer ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img1">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl">
            <div className="row align-items-md-center">
              <div className="col-lg-4 col-md-4 col-sm-12 order-md-2">
                <div className="footer-logo text-sm-center">
                  <img
                    data-src="images/footer-logo.png"
                    className="img-fluid"
                    alt="footer-logo"
                    src="images/footer-logo.png"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 order-md-1 res-767-mt-20">
                <div className="text-left">
                  <div className="featured-icon-box left-icon icon-align-top">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-textcolor-white ttm-icon_element-size-md">
                        <i className="ti ti-location-pin" />
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-desc">
                        <p>
                          4789 Melmorn Street, Zakilahon Ton Mashintron Town USA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 order-md-3 res-767-mt-20">
                <div className="text-sm-right">
                  <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white">
                    <i className="far fa-envelope" /> Info@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="second-footer ttm-textcolor-white ttm-bgcolor-skincolor">
          <div className="container-xl">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 widget-area">
                <div className="widget widget_text  clearfix">
                  {/* <h3 className="widget-title">Contact us</h3> */}
                  {/* <div className="textwidget widget-text">
                    We are the best world Information Technology Company.
                    Providing the highest quality in hardware &amp; Network
                    solutions. About more than 20 years of experience and 1000
                    of innovative achievements.
                  </div> */}
                  <div className="quicklink-box">
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box left-icon">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                          <span className="flaticon flaticon-clock" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                      <div className="featured-content">
                        {/*  featured-content */}
                        <div className="featured-desc">
                          {/*  featured-desc */}
                          <p>Talk To Our Support</p>
                        </div>

                        <div className="featured-title">
                          <a
                            className="ttm-btn ttm-btn-color-white"
                            href={`mailto: ${CONTACT.email}`}
                          >
                            {CONTACT.email}
                          </a>
                          <a
                            className="ttm-btn  ttm-btn-color-white"
                            href={`tel: ${CONTACT.mobile}`}
                          >
                            {CONTACT.mobile}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*  featured-icon-box END */}
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-1 col-lg-6 widget-area"></div>

              {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget link-widget clearfix">
                  <h3 className="widget-title">Quick Links</h3>
                  <ul id="menu-footer-services">
                    <li>
                      <a>Make Appointment</a>
                    </li>
                    <li>
                      <a>Customer Services</a>
                    </li>
                    <li>
                      <a>Department Services</a>
                    </li>
                    <li>
                      <a>About Company</a>
                    </li>
                    <li>
                      <a>Our Case Studies</a>
                    </li>
                    <li>
                      <a>Free Consultation</a>
                    </li>
                    <li>
                      <a>Meet Our Experts</a>
                    </li>
                    <li>
                      <a>Our Business Growth</a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-991-mb-40 res-767-mb-0">
                <div className="widget widget_text clearfix">
                  <h3 className="widget-title">Latest News</h3>
                  <ul className="widget-post ttm-recent-post-list">
                    <li>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        <img
                          className="img-fluid"
                          alt="post-img"
                          src="https://via.placeholder.com/150X150/444444.jpg"
                        />
                      </a>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        Define World Best IT Solution Technology
                      </a>
                      <span className="post-date">
                        <i className="fa fa-calendar" />
                        May 01, 2019
                      </span>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        <img
                          className="img-fluid"
                          alt="post-img"
                          src="https://via.placeholder.com/150X150/444444.jpg"
                        />
                      </a>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        You Must Try 20 Secret Of Digital Transform
                      </a>
                      <span className="post-date">
                        <i className="fa fa-calendar" />
                        May 03, 2019
                      </span>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        <img
                          className="img-fluid"
                          alt="post-img"
                          src="https://via.placeholder.com/150X150/444444.jpg"
                        />
                      </a>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        10 PHP Frameworks You Need To Use Anywhere
                      </a>
                      <span className="post-date">
                        <i className="fa fa-calendar" />
                        May 05, 2019
                      </span>
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 widget-area res-767-mb-40">
                <div className="widget flicker_widget clearfix">
                  {/* <h3 className="widget-title">News Letter</h3> */}
                  <div className="textwidget widget-text">
                    {/* Sign up today for hints, tips and the latest product news
                    <form
                      id="subscribe-form"
                      className="newsletter-form"
                      method="post"
                      action="#"
                      data-mailchimp="true"
                    >
                      <div
                        className="mailchimp-inputbox clearfix"
                        id="subscribe-content"
                      >
                        <i className="fa fa-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address.."
                          required
                        />
                        <input type="submit" value="" />
                      </div>
                      <div id="subscribe-msg" />
                    </form> */}
                    <h5>Follow Us On</h5>
                    <div className="social-icons circle social-hover">
                      <ul className="list-inline">
                        {CONTACT.facebook && (
                          <li className="social-facebook">
                            <a
                              className="tooltip-top rounded-circle"
                              target="_blank"
                              data-tooltip="Facebook"
                              href={CONTACT.facebook}
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                        )}
                        {CONTACT.twitter && (
                          <li className="social-twitter">
                            <a
                              className="tooltip-top rounded-circle"
                              target="_blank"
                              data-tooltip="Twitter"
                              href={CONTACT.twitter}
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                        )}
                        {CONTACT.linkdin && (
                          <li className="social-linkedin">
                            <a
                              className=" tooltip-top rounded-circle"
                              target="_blank"
                              data-tooltip="LinkdIn"
                              href={CONTACT.linkdin}
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer-text ttm-bgcolor-darkgrey ttm-textcolor-white">
          <div className="container-xl">
            <div className="row copyright align-items-center res-767-text-center">
              <div className="col-md-6">
                <div>
                  <span>
                    Copyright ©{new Date().getFullYear()}&nbsp;
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      {SITE.title}
                    </a>{" "}
                    by{" "}
                    <a
                      href={`mailto: ${SITE.developerEmail}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {SITE.developer}
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-md-right res-767-mt-10">
                  <div className="d-lg-inline-flex">
                    {/* <ul id="menu-footer-menu" className="footer-nav-menu">
                      <li>
                        <a>Policy</a>
                      </li>
                    </ul>
                    <div className="float-md-right ml-20 res-767-ml-0">
                      <img
                        data-src="images/footer-payment-img.png"
                        alt="payment-img"
                        src="images/footer-payment-img.png"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
