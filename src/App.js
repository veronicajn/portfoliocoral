import React from "react";
import About from './Components/about/about';
import Head from './Components/header/head';
import Home from './Components/home/home';
import Projects from './Components/projects/projects';



import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

  function App() {
  return (

    <Router>
       <Head />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>


    </Router>
  );
}

export default App;
