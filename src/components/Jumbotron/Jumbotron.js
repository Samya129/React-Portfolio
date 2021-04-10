import React from "react";
import "./style.css";
import Resume from "../../assets/ResumeFolder/ResumeTemplate.pdf";

function Jumbotron() {
  return (
    <div>
      <header id="Headerpart1" className="jumbotron jumbotron-fluid">
        <section className="container">
          <h1 className="display-4">Welcome to my page!</h1>
          <div className="row">
            <div className="col-md-4">
              <figure>
                <img
                  className="img-fluid mx-auto d-block"
                  src="https://via.placeholder.com/250x350"
                  alt="professionalPhoto"
                />
                <figcaption>
                  For more information, please contact me by Email:
                  <a href="mailto:Samyaf020@gmail.com"> Samyaf020@gmail.com</a>
                  <br />
                  or Phone: (646)-204-8250
                </figcaption>
              </figure>
            </div>

            <div class="col-md-8">
              <p class="lead">
                Hi, my name is Samya Fiki. I am a current student at Columbia
                University's coding bootcamp and an aspiring software developer.
                Some of my hobbies include skincare and doing yoga in my spare
                time. Thus far, coding has taught me a lot and as time goes on
                my skills only progress and strengthen. As a learning developer,
                I am very excited to improve software applications as well as
                create new ones i've always envisioned. While Covid-19 has
                slowed a lot of things down, this industry is here to stay! With
                that being said I leave you with an inspirational quote. "Trust
                the wait. Embrace the uncertainty.Enjoy the beauty of becoming.
                When nothing is certain, ANYTHING is possible."
              </p>
              <p>
                <h3>
                  {" "}
                  <strong>Current Languages Spoken:</strong>
                </h3>{" "}
                HTML5, CSS3, jQuery, Javascript, ES6, Bootstrap.
              </p>
              <p>
                <h3>
                  {" "}
                  <strong>Developer Tools:</strong>
                </h3>
                Terminal, Github, Git, Bootstrap, VSCode, Heroku.
              </p>
              <a
                href="https://github.com/Samya129"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  id="GithubAccount"
                  class="btn btn-dark marginRight"
                >
                  <i class="fab fa-github"></i> Github
                </button>
              </a>
              {/* Did not feel comfortable to put my resume online publically, so instead I added a placeholder for this assignment that required a link to the pdf. */}
              <a
                href={Resume}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  id="ResumePersonal"
                  class="btn btn-dark marginLeft"
                >
                  Resume <i class="fas fa-file"></i>
                </button>
              </a>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
export default Jumbotron;
