import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile-pic.jpg';
import Social from '../components/Social';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className='condiv home'>
        <img src={profilepic} className='profilepic'></img>
        <ReactTypingEffect
          className='typingeffect'
          text={['I am Doreen Rowena Ligman', 'I am a web developer']}
          speed={100}
          eraseDelay={700}
        />
        <Social />
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default Home;
