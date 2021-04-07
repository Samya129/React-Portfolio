import React from "react";
// import {projectsArray} from "../Information.js";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard"
import ProjectsHeader from "../../components/ProjectsHeader/ProjectsHeader"


function Portfolio() {
  return (
    <div>
    <Navbar />
    <ProjectsHeader/>
    <PortfolioCard />
  </div>
  );
}
export default Portfolio;
