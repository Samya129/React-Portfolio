import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={["/", "/About"]}>
          <About />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
