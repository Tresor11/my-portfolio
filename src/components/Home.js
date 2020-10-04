import React from "react";
import TypeIt from "typeit-react";

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
                  Hello👋, I'm <strong>Tresor Bireke</strong>.<br/>
                  I'm a Full Stack Web Developer.
          </div>
        </div>
        <div className="action">
          <a href="#about">
            <button className="action-btn button">View my work</button>
          </a>
        </div>
      </div>

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
