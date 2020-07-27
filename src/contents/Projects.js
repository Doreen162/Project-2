import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import images from '../img/images.png';
import contact from '../img/contact.png';
import login from '../img/login.png';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className='condiv projects'>
      <h3> My Projects</h3>
      <ReactTypingEffect
        className='typingeffect'
        text={['GitHub Finder']}
        speed={100}
        eraseDelay={700}
      />
      <br></br>
      <img src={images} className='images'></img>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <ReactTypingEffect
        className='typingeffect'
        text={['Contact-Keeper']}
        speed={100}
        eraseDelay={700}
      />
      <br></br>
      <img src={contact} className='contact'></img>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <ReactTypingEffect
        className='typingeffect'
        text={['I.T Logger']}
        speed={100}
        eraseDelay={700}
      />
      <br></br>
      <img src={login} className='login'></img>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
};

export default Projects;
