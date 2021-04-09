import React from "react";
import ConnectImage from "../../assets/images/Connect.png"
import LinkedIn from "../../assets/images/LinkedIn.png"
import "./style.css";

let contactExtra = [
  {
    alt: "Let's Connect Image",
    src: ConnectImage,
  },
  {
    alt: "LinkedIn Link",
    src: LinkedIn,
  }
]

function ContactAdditional(){
    return(
        <figure className="col-md-6">
        <img
          className="img-fluid connect"
          src= {contactExtra[0].src}
          alt={contactExtra[0].alt}
        />
        <a
          href="https://www.linkedin.com/in/samya-fiki-a268861bb/"
          target="_blank" rel="noreferrer"
        >
          <img
          className= "linkedIn"
            src={contactExtra[1].src}
            alt={contactExtra[1].alt}
          />
        </a> 
      </figure>
    )
}
export default ContactAdditional;