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
                <span>Resell-App</span>This project a Resell-App allowing users
                to buy or resell their partially used items. The items are
                uploaded by the admin, and users can view or add them to their
                wish list and are provided with the information of the owner to
                discuss the price. The items are saved and retrieved from a
                Rails API built for this project.
              </p>
              <p className="skills">
                <span>JavaScript</span>
                <span>Ruby</span>
                <span>React</span>
                <span>Rails</span>
                <span>JWT</span>
              </p>
              <p className="links">
                <a className="shadow">
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a className="shadow">
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
                <span>Recipes-Catalog</span>This project is a react app that
                fetches the data from themealBD API and allows anyone to browse
                different categories of meals and get the details such as the
                origin and the ingredients for a specific recipe.
              </p>
              <p className="skills">
                <span>JavaScript</span>
                <span>React</span>
                <span>HTML</span>
                <span>SASS</span>
              </p>
              <p className="links">
                <a className="shadow">
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a className="shadow">
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
                <a className="shadow">
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
                <span>Weather-App</span> This project is a Weather Application that pulls from the
                OpenWeatherMap API to allow users to search for and view the
                forecast in cities worldwide.
              </p>
              <p className="skills">
                <span>JavaScript</span>
                <span>HTMLs</span>
                <span>CSS3</span>
              </p>
              <p className="links">
                <a className="shadow">
                  Live Demo{" "}
                  <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                </a>
                <a className="shadow">
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
