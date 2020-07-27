import React, { Component } from 'react';
import Social from '../components/Social';
import Footer from '../components/Footer';

class Contact extends Component {
  render() {
    return (
      <div className='condiv'>
        <h1 className='subtopic'>Contact Me</h1>
        <h2>Email : doreenligman17@gmail.com</h2>
        <h2>contact : +27 78 841 4676 </h2>

        <a
          href='https://docs.google.com/document/d/14j51-qgcxPSGa8BTZL7nEU1dFEkEg6Zexqg1lkRiLjw/edit'
          target='_blank'
        >
          Download my CV
        </a>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Footer />
        <Social />
      </div>
    );
  }
}

export default Contact;
