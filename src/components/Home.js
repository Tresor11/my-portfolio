import React from "react";
import TypeIt from "typeit-react";

const Home = () => {
  return (
    <div className="home">
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
    </div>
  );
};

export default Home;
