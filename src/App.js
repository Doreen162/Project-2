import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Work from './contents/Work';
import Projects from './contents/Projects';
import Testimonial from './contents/Testimonial';
import Contact from './contents/Contact';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/education'>
          <Education />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/Work'>
          <Work />
        </Route>
        <Route path='/Projects'>
          <Projects />
        </Route>
        <Route path='/Testimonial'>
          <Testimonial />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
