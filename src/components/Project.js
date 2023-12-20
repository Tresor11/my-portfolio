import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const Project = () => {
  return (
    <div className="project-cont" id="projects">
      <Fade top>
        <div className="section-intro">
          <h1>PROJECTS</h1>
        </div>
      </Fade>
      <div className="projects">
        <div className="project shadow">
          <Slide left>
            <div className="project-img">
              <div className="img"></div>
            </div>
          </Slide>
          <Slide right>
            <div className="project-des">
              <p className="des">
                <span>Resell-App</span>
                This project a Resell-App allowing users to buy or resell their
                partially used items. The items are uploaded by the admin, users
                can view or add them to their wish list and are provided with
                the information of the owner to discuss the price. The items are
                saved and retrieved from a Rails API.
              </p>
              <p className="skills">
                <span>JavaScript</span>
                <span>Ruby</span>
                <span>React</span>
                <span>Rails</span>
                <span>PostgreSQL</span>
                <span>JWT</span>
              </p>
              <p className="links">
                <a
                  className="shadow"
                  href="https://resell-app.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a
                  className="shadow"
                  href="https://github.com/Tresor11/final-capstone"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Source <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </Slide>
        </div>

        <div className="project shadow">
          <Slide left>
            <div className="project-img">
              <div className="img"></div>
            </div>
          </Slide>
          <Slide right>
            <div className="project-des">
              <p className="des">
                <span>Recipes-Catalog</span>This project is a React App that
                fetches the data from themealBD API and allows anyone to browse
                different categories of meals and get the details such as the
                origin and the ingredients for a specific recipe.
              </p>
              <p className="skills">
                <span>JavaScript</span>
                <span>React</span>
                <span>HTML</span>
                <span>Sass</span>
              </p>
              <p className="links">
                <a
                  className="shadow"
                  href="https://recipes-catalogue.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a
                  className="shadow"
                  href="https://github.com/Tresor11/recipes-catalogue"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Source <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </Slide>
        </div>

        <div className="project shadow">
          <Slide left>
            <div className="project-img">
              <div className="img"></div>
            </div>
          </Slide>
          <Slide right>
            <div className="project-des">
              <p className="des">
                <span>CSS-Linter</span> This project is an implementation of a
                CSS Linter for beginners using Ruby. This linter detects several
                errors such as indentation errors or assignment errors.
              </p>
              <p className="skills">
                <span>Ruby</span>
                <span>Rspec</span>
              </p>
              <p className="links">
                <a
                  className="shadow"
                  href="https://github.com/Tresor11/css-linter"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Source <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </Slide>
        </div>

        <div className="project shadow">
          <Slide left>
            <div className="project-img">
              <div className="img"></div>
            </div>
          </Slide>
          <Slide right>
            <div className="project-des">
              <p className="des">
                <span>Weather-App</span>
                This project is a responsive Weather application that pulls the
                data from the OpenWeatherMap API allowing users to search and
                view the forecast in cities worldwide. The app allows users to
                convert the temperature in Celcius or Kelvin.
              </p>
              <p className="skills">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </p>
              <p className="links">
                <a
                  className="shadow"
                  href="https://rawcdn.githack.com/Tresor11/weather-app/4f9168043619b255732e9fe95c99197d22b5ddfe/dist/index.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a
                  className="shadow"
                  href="https://github.com/Tresor11/weather-app"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Source <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Project;
