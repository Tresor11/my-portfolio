import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <div className="about-cont" id="about">
      <Fade top>
        <div className="section-intro">
          <h1>ABOUT ME</h1>
        </div>
      </Fade>
      <div className="about">
        <div className="about-me">
          <div className="pic-cont">
            <Fade bottom>
              <div className="picture"></div>
            </Fade>
          </div>
          <Slide left>
            <p>
              I'm Tresor, a Full Stack Software Developer
              who loves to build fast and powerful Back-End services and Web apps
              with intuitive UI. <br/>
              I'm currently working as a <strong>Senior developer</strong> at <strong><a href="https://thoughtbot.com/">Thoughtbot</a></strong>.<br/>
              Feel free to{" "}
              <a href="#contacts">connect with me</a>.
              <br />
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
            <i class="devicon-amazonwebservices-plain-wordmark"></i>
            <i class="devicon-redis-plain"></i>
            <i class="devicon-bootstrap-plain-wordmark"></i>
            <i class="devicon-tailwindcss-original"></i>
            <i class="devicon-sass-original"></i>
            <i class="devicon-webpack-plain-wordmark"></i>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
