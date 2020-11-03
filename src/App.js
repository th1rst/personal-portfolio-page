import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { LanguageContext } from "./components/Multilanguage/LanguageProvider";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import BookPreviewer from "./pages/BookPreviewer";

const App = () => {
  const { userLanguageChange } = useContext(LanguageContext);
  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem("userLanguage");
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/previewer/:slug" component={BookPreviewer} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
