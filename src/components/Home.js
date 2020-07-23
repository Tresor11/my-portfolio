import React from "react";
import TypeIt from "typeit-react";
import Particles from 'react-particles-js';
import * as params from './particle.json';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="nav">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#articles">ARTICLES</a>
        <a href="#contacts">CONTACTS</a>
      </div>
      <div className="intro">
        <div className="cont">
          <div className="description">
            <TypeIt
              options={{
                strings: [
                  "Hello👋, I'm <strong>Tresor Bireke</strong>.",
                  "I'm a Full Stack Web Developer.",
                ],
                speed: 40,
                waitUntilVisible: true,
              }}
            />
          </div>
        </div>
        <div className="action">
          <a href="#about">
            <button className="action-btn button">View my work</button>
          </a>
        </div>
      </div>

      {/* .ripple-background
  .circle.xxlarge.shade1
  .circle.xlarge.shade2
  .circle.large.shade3
  .circle.mediun.shade4
  .circle.small.shade5 */}

      <div className="ripple-background">
        <div  className=" circle xxlarge shade1"></div>
        <div  className=" circle xlarge shade2"></div>
        <div className=" circle large shade3"></div>
        <div className=" circle medium shade4"></div>
        <div className=" circle small shade5"></div>
      </div>
    </div>
  );
};

export default Home;
