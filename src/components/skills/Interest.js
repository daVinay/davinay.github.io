import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
      return (
          <div className={classes.box} id="interest">
              <ScrollAnimation
                  offset="0"
                  animateIn="fadeInLeft"
                  duration="2.4"
                  animateOnce="true"
                  initiallyVisible={true}
              >
                  <span className={classes.head}>WHAT I DO?</span>
                  <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
                  <div className={classes.Interest}>
                      <ScrollAnimation
                          offset="0"
                          animateIn="fadeInLeft"
                          duration="2.4"
                          animateOnce="true"
                          initiallyVisible={true}
                      >
                          <div className={classes.web}>
                              <h3>APP Develpoment</h3>
                              <p>I started my career from Android dev and moved to react native later.</p>
                          </div>
                      </ScrollAnimation>
                      <ScrollAnimation
                          offset="0"
                          animateIn="fadeInLeft"
                          duration="2.4"
                          animateOnce="true"
                          initiallyVisible={true}
                      >
                          <div className={classes.app}>
                              <h3>Web Develpoment</h3>
                              <p>
                                  I am a full stack web developer and build websites using HTML, CSS, Javascript,
                                  ReactJs.
                                  <br /> I have also good grasp on Node and C#/.Net
                              </p>
                          </div>
                      </ScrollAnimation>
                      <ScrollAnimation
                          offset="0"
                          animateIn="fadeInLeft"
                          duration="2.4"
                          animateOnce="true"
                          initiallyVisible={true}
                      >
                          <div className={classes.other}>
                              <h3>Other Interest</h3>
                              <p>
                                  Playing basketball and cricket.
                                  <br />
                              </p>
                          </div>
                      </ScrollAnimation>
                  </div>
              </ScrollAnimation>
          </div>
      );
  }
}

export default Interest;
