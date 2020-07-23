import React from "react";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="contact-cont" id="contacts">
      <Fade top>
        <div className="section-intro">
          <h1>CONTACT ME!</h1>
        </div>
      </Fade>
      <Fade bottom>
      <div className="contact">
        <a
          href="mailto:tresor.moise2001@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-envelope    "></i>
        </a>

        <a
          href="https://www.linkedin.com/in/tresor-bireke/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-linkedin    "></i>
        </a>

        <a
          href="https://twitter.com/TBireke"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-twitter    "></i>
        </a>

        <a
          href="https://github.com/Tresor11"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-github"></i>
        </a>

        <a
          href="https://medium.com/@tresor.moise2001"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-medium    "></i>
        </a>
      </div>
      </Fade>
      <div className="footer">
        <p>Made with 💖 by Tresor bireke © 2020</p>
      </div>
    </div>
  );
};

export default Contact;
