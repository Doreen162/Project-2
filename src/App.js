import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Work from './contents/Work';
import Contact from './contents/Contact';
import Skills from './contents/Skills';
import Testimonial from './contents/Testimonial';

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
        <Route path='/Work'>
          <Work />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/Testimonial'>
          <Testimonial />
        </Route>
      </div>
    </Router>
  );
}

export default App;
