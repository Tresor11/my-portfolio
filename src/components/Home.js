import React from 'react';
import TypeIt from "typeit-react";

const Home=()=>{
    return(
        <div className="home">
            <div className="intro">
                <div className='cont'>
                <div className="description">
                <TypeIt
        options={{
          strings: ["Hello👋!","I'm <strong>Tresor Bireke</strong> a Full Stack Web Developer."],
          speed: 40,
        waitUntilVisible: true
        }}
      />
                </div>
                </div>
                <div className="action">
                    <button className="action-btn button">
                        <a href="#about">More about me</a>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Home;