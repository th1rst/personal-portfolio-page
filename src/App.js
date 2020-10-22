import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route component={Error404} />
    </Switch>
    <Footer />
  </>
);

export default App;
