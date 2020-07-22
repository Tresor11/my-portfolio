import React from "react";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="contact-cont" id="contact">
      <Fade top>
        <div className="section-intro">
          <h1>CONTACT ME!</h1>
        </div>
      </Fade>
      <div className="contact">
        <a>
          <i class="fa fa-envelope    "></i>
        </a>

        <a>
          <i class="fa fa-linkedin    "></i>
        </a>

        <a>
          <i class="fa fa-twitter    "></i>
        </a>

        <a>
          <i class="fa fa-github"></i>
        </a>

        <a>
          <i class="fa fa-medium    "></i>
        </a>
      </div>
      <div className="footer">
        <p>Made with 💖 by Tresor bireke © 2020</p>
      </div>
    </div>
  );
};

export default Contact;
