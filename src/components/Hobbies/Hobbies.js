import React from "react";
import "./style.css";
import Beach from "../../assets/images/Beach.png";
import Dancing from "../../assets/images/SalsaDance.png";
import Service from "../../assets/images/CommunityService.png";

let tags = [
  {
    src: Beach,
    alt: "Beach Image",
  },
  {
    src: Dancing,
    alt: "Salsa Dancing Image",
  },
  {
    src: Service,
    alt: "Community Service Image",
  },
];

function Hobbies() {
  return (
    <div>
      <header id="Headerpart2" className="container">
        <section id="AboutMe" className="row">
          <section className="col-md-12 ">
            <h1>About Me </h1>
          </section>
        </section>
      </header>

      {/* Our rows function in containers (Create grid and container)  */}
      <section className="container">
        {/* Our columns function in rows. */}
        <section className="row">
          {/* One third of screen (4/12) */}
          <div id="Aboutmepart1" className="col-md-4 ">
            <h2>Beach for Days</h2>

            <img
              id="Beach"
              className="img-fluid"
              src={tags[0].src}
              alt={tags[0].alt}
            />

            <p className="MainParagraphs">
              {" "}
              If there’s any activity I love doing the most in the summer
              months, that’s taking some fun in the sun. Sand castle anyone?
            </p>
          </div>

          {/* Two third of screen (4/12) */}
          <div id="Aboutmepart2" className="col-md-4">
            <h2>Dancing by the Hour</h2>
            <img
              id="Dancing"
              className="img-fluid dancing"
              src={tags[1].src}
              alt={tags[1].alt}
            />
            <p className="MainParagraphs">
              {" "}
              I LOOOOVE to dance! Zumba, Salsa or any other form of dancing I
              can get my hands on learning, COUNT ME IN! When Covid-19 is over,
              I plan to take on the Waltz as a new style of dance to learn.
            </p>
          </div>

          {/* Three third of screen (4/12) */}
          <div id="Aboutmepart3" className="col-md-4">
            <h2>Helping by the Minute</h2>
            <img
              className="mx-auto d-block"
              id="communityService"
              className="img-fluid"
              src={tags[2].src}
              alt={tags[2].alt}
            />
            <p className="MainParagraphs">
              {" "}
              Giving back to my community alongside my sisters of Hermandad de
              Sigma Iota Alpha, Inc sorority will always be my heart and main
              focus to help and educate communities in need while promoting
              sisterhood, leadership, and excellence academically.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Hobbies;
