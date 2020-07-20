import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import Footer from '../components/Footer';

class Education extends Component {
  render() {
    return (
      <div className='condiv'>
        <h1 className='subtopic'>My Education</h1>
        <Widecard
          title='Web development/Programming Coding Course'
          where='Lifechoices Academy'
          from='24 February 2020'
          to='Present'
        />
        <Widecard
          title='Broad Based Digital Skills Candidate'
          where='CapaCiti Tech Career Accelerator'
          from='November 2019'
          to='January 2020'
        />
        <Widecard
          title='Believe Program and Udemy Online Courses'
          where='Naspers Labs (Delft Mall)'
          from='August 2019'
          to='October 2019'
        />

        <Widecard
          title='HomeBase Care Level 1,2 & 3'
          where='South Africa Red Cross Society'
          from='20 June 2017'
          to='4 August 2017'
        />
        <Widecard
          title='Grade 9 - 12'
          where='Hindle high School'
          from='2009'
          to='2012'
        />
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

export default Education;
