import React from "react"
import "./style.css"
// import { generalInfo } from "../../Information.js";

function Jumbotron(){
    return(
        <div>
            <header id="Headerpart1" className="jumbotron jumbotron-fluid">
            <section className="container">
            <h1 className="display-4">Welcome to my page!</h1>
            <div className="row"> 
            <div className="col-md-4">
            <figure>
            <img className="img-fluid mx-auto d-block" src="https://via.placeholder.com/250x350" alt="professionalPhoto"/>
            <figcaption>For more information, please contact me by Email:<a href="mailto:Samyaf020@gmail.com"> Samyaf020@gmail.com</a><br/>or Phone: (646)-204-8250</figcaption>
            </figure>
            </div>
            </div>
            </section>
            </header>
        </div>

    )
}
export default Jumbotron;