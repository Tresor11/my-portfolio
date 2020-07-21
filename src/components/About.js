import React from "react";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div className="about-cont" id="about">
        <Fade top>
        <div className="section-intro">
        <h1>ABOUT</h1>
        </div>
        </Fade>
      <div className="about">
        <div className="about-me">
          <Slide left>
            <p>
              I'm Tresor,
              <br /> a Freelance Full-Stack Developer based in Rwanda who loves
              to build Fast and Powerfull Backed services and web apps with
              intuitive UI.feel free to connect with me.
            </p>
          </Slide>
        </div>
        <Slide right>
        <div className="skills">
            <i class="devicon-rails-plain-wordmark"></i>
            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-ruby-plain-wordmark"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <i class="devicon-postgresql-plain-wordmark"></i>
            <i class="devicon-mysql-plain-wordmark"></i>
            <i class="devicon-github-plain-wordmark"></i>
            <i class="devicon-bootstrap-plain-wordmark"></i>
            <i class="devicon-sass-original"></i>
            <i class="devicon-webpack-plain-wordmark"></i>
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
