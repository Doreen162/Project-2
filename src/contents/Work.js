import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import Footer from '../components/Footer';

class Work extends Component {
  render() {
    return (
      <div className='condiv'>
        <h1 className='subtopic'>Work Experience</h1>
        <Widecard
          title='Full Stack Developement Intern'
          where='Salasian Life Choices'
          from='September 2020'
          to='Present'
        />
        <Widecard
          title='Caregiver'
          where='Creative Wellness'
          from='April 2018'
          to='May 2018'
        />
        <Widecard
          title='Caregiver (Volunteer)'
          where='Huis Matina (Old Age Home)'
          from='November 2017'
          to='December 2017'
        />
        <Widecard
          title='General Worker'
          where='Rainbow Factory (Capacity Agency)'
          from='June 2014'
          to='November 2016'
        />
        <Widecard
          title='Cashier'
          where='Dunns Clearance Shop'
          from='December 2012'
          to='June 2013'
        />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default Work;
