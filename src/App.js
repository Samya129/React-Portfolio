import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL+"/"}>
      <div className="App">
        <Route exact path={["/","/About"]} component={About}/>   
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Portfolio" component={Portfolio}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
